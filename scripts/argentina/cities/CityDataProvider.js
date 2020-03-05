const cityCollection = [
    {
        name: "Buenos Aires",
        info: "Buenos Aires is Argentina’s big, cosmopolitan capital city. Its center is the Plaza de Mayo, lined with stately 19th-century buildings including Casa Rosada, the iconic, balconied presidential palace.",
        img: "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555940066/production/city/hero_image_29_1555940066.jpg"
    },
    {
        name: "Villa La Angostura",
        info: "Villa La Angostura is a resort town on Nahuel Huapi Lake in Patagonia, Argentina. It’s known for its Alpine-style wooden buildings. The surrounding Nahuel Huapi National Park has Andean mountains, lakes and forests. Nearby, Los Arrayanes National Park contains centuries-old arrayán trees. Cerro Bayo mountain ski trails are just outside of town. The Seven Lakes road winds north to the town of San Martín de los Andes.",
        img: "https://i2.wp.com/careerbreakadventures.com/wp-content/uploads/2019/03/angostura-view.jpg?fit=1200%2C813&ssl=1"
    },
    {
        name: "Bariloche",
        info: "San Carlos de Bariloche (commonly called Bariloche) is a town in Argentina’s Patagonia region. It borders Nahuel Huapi, a large glacial lake surrounded by the Andes Mountains. Bariloche is known for its Swiss alpine-style architecture and its chocolate, sold in shops lining Calle Mitre, the main street. It's also a popular base for hiking and skiing the nearby mountains and exploring the surrounding Lake District.",
        img: "https://cdn.tourradar.com/s3/tour/1500x800/113102_9a0e277b.jpg"
       
    }
]

export const useCity = () => {
    return cityCollection.slice();
}