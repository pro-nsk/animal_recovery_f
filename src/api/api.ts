import { BaseApi, configuration } from './base/baseApi'
import { processError } from './fetch'
import { StorageKey } from '../util/storage'

interface Options {
    method: string
    body?: any
    headers?: any
}

export interface Post {
    _id?: string
    mainImage: string
    text: string
}

class Api extends BaseApi {

    async counterGet(): Promise<any> {
        return this.sendRequest('/operations-counter')
    }

    async counterCreate(counter): Promise<any> {
        return this.sendRequest('/operations-counter', {
            method: 'POST',
            body: JSON.stringify({ counter })
        })
    }

    async counterEdit(counter): Promise<any> {

        const options: RequestInit = {
            method: 'PUT',
            body: JSON.stringify({ counter })
        }

        try {
            const response = await this.fetch(configuration.basePath + '/operations-counter', options)
            if (response) {
                return Promise.resolve(true)
            } else {
                return Promise.resolve(false)
            }
        } catch (e) {
            return processError(e)
        }
    }

    async home(page: number): Promise<any> {
        return this.sendRequest('/news/' + page)
    }

    async post(id: string): Promise<Post> {
        return this.sendRequest('/post/' + id)
    }

    async getPhotos(): Promise<any> {
        return this.sendRequest(
            'https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=9c2f9a8ed41199c726ef14607079721e&photoset_id=72157712051830726&user_id=185879434@N08&extras=url_l&per_page=10&page=1&format=json&nojsoncallback=1',
            { method: 'GET' },
            'omit'
        )
    }

    async create(post: Post): Promise<boolean> {

        const options: RequestInit = {
            method: 'POST',
            body: JSON.stringify(post)
        }

        try {
            const response = await this.fetch(configuration.basePath + '/post', options)
            if (response) {
                return Promise.resolve(true)
            } else {
                return Promise.resolve(false)
            }
        } catch (e) {
            return processError(e)
        }
    }

    async edit(id: string, post: Post): Promise<boolean> {

        const options: RequestInit = {
            method: 'PUT',
            body: JSON.stringify(post)
        }

        try {
            const response = await this.fetch(configuration.basePath + '/post/' + id, options)
            if (response) {
                return Promise.resolve(true)
            } else {
                return Promise.resolve(false)
            }
        } catch (e) {
            return processError(e)
        }
    }

    async login(email: string, password: string): Promise<boolean> {

        const form = 'email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password)

        const options: RequestInit = {
            method: 'POST',
            body: form,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        try {
            await this.fetch(configuration.basePath + '/login', options)
            localStorage.setItem(StorageKey.Authenticated, 'true')
            return Promise.resolve(true)
        } catch (err) {
            return processError(err)
        }
    }

    async register(email: string, password: string, confirmPassword: string): Promise<boolean> {

        const form = 'email=' + encodeURIComponent(email) + '&password=' + encodeURIComponent(password) + '&confirmPassword=' + encodeURIComponent(confirmPassword)

        const options: RequestInit = {
            method: 'POST',
            body: form,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }

        try {
            await this.fetch(configuration.basePath + '/register', options)
            localStorage.setItem(StorageKey.Authenticated, 'true')
            return Promise.resolve(true)
        } catch (err) {
            return processError(err)
        }
    }

    async logout(): Promise<boolean> {
        try {
            await this.fetch(configuration.basePath + '/logout', { method: 'GET' })
            localStorage.removeItem(StorageKey.Authenticated)
            return Promise.resolve(true)
        } catch (e) {
            return Promise.resolve(false)
        }
    }

    async delete(id: string): Promise<boolean> {
        try {
            await this.fetch(configuration.basePath + '/post/' + id, { method: 'DELETE' })
            return Promise.resolve(true)
        } catch (error) {
            return processError(error)
        }
    }

    private async sendRequest(url: string, options: Options = { method: 'GET' }, credentials?): Promise<any> {
        try {
            const finalUrl = url.indexOf('http') > -1 ? url : configuration.basePath + url
            const response = await this.fetch(finalUrl, options, credentials)
            const json = await response.json()
            return Promise.resolve(json)
        } catch (error) {
            return processError(error)
        }
    }
}

export const api = new Api()