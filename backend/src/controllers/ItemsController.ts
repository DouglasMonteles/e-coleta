import { Request, Response } from 'express';
import knex from '../database/connection';

import { API_CONFIG } from "../config/api-config";

export default class ItemsController {
    async index(request: Request, response: Response) {

        const items = await knex('items').select('*');

        const serialazedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `${API_CONFIG.baseUrl}/uploads/${item.image}`,
            };
        });
        return response.json(serialazedItems);
    }
}