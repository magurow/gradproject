<template>
    <div>
        <h1>Ayarlar</h1>
        <form>
            <p>Henuz ayar yok.</p>
            <button @click="saveSettings">Ayarları Kaydet</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        saveSettings() {
            // Ayarları kaydetmek için burada gerekli işlemleri yapabilirsiniz.
            console.log('Ayarlar kaydedildi:', this.username, this.email);
        }
    }
};
</script>

<style scoped>
h1 {
    color: #333;
}
button {
    padding: 0.5rem 1rem;
    background-color: #32118d;
    color: #fff;
    border: none;
    cursor: pointer;
}
</style>
