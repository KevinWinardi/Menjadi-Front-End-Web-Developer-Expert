import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
    static showLoading() {
        document.getElementById('loading-indicator').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }

    static hideLoading() {
        document.getElementById('loading-indicator').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
    }

    static async getData(api) {
        try {
            this.showLoading();
            const response = await fetch(api);
            const responseJson = await response.json();

            if (responseJson.error) {
                throw new Error('Fail to get data');
            }
            return responseJson;
        } catch (error) {
            throw new Error(error);
        } finally {
            this.hideLoading();
        }
    }

    static async listRestaurant() {
        const responseJson = await this.getData(API_ENDPOINT.LIST);
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const responseJson = await this.getData(API_ENDPOINT.DETAIL(id));
        return responseJson.restaurant;
    }

    static async submitReview(id) {
        try {
            const restaurantObject = {
                id: id,
                name: document.getElementById('input-name').value,
                review: document.getElementById('input-review').value,
            };
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(restaurantObject),
            };
            await fetch(API_ENDPOINT.REVIEW, options);
            this.detailRestaurant(id); // Trigger cache StaleWhileRevalidate
            window.location.reload();
        } catch (error) {
            throw new Error(error);
        } finally {
            this.hideLoading();
        }
    }
}

export default RestaurantSource;
