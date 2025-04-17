app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :class="{'out-of-stock-img':!inStock}" :src="image">
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <p>Shipping: {{ shipping }}</p>
            <p :style="{color:saleColor}">{{ sale }}</p>
            <h2>Description: </h2>
            <ul>
                <li v-for="detail in details" :key="detail">{{detail}}</li>
            </ul>
            <h2>Colors: </h2>
            <div class="color-circle" :style="{backgroundColor: variant.color}" v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)"></div>
            <h2>Sizes: </h2>
            <ul>
                <li v-for="size in sizes" :key="size">{{size}}</li>
            </ul>
            <button 
                class="button" 
                :class="{disabledButton:!inStock}" 
                :disabled="!inStock"
                @click="addToCart">
                Add to Cart
            </button>
            <button 
                class="button"
                :class="{disabledButton: !inStock}"
                :disabled="!inStock" 
                @click="removeFromCart">
                Remove Item
            </button>
          </div>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        <review-form @review-submitted="addReview"></review-form>
      </div>`,
      data() {
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            selectedVariant: 0,
            inventory: 0,
            onSale: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                {id:2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
                {id:2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0},
            ],
            saleColor: 'red',
            sizes: ['small(s)', 'medium(m)', 'large(l)', 'extra-large(xl)'],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            // this.cart += 1
            // this.$emit('add-to-cart')
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        removeFromCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        addReview(review){
            this.reviews.push(review);
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            if (this.premium){
                return 'Free';
            }
            return 2.99+'$';
        }
    }
})