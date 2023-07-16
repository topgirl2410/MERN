import mongoose from 'mongoose';

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb+srv://princess82:password82@princess.xllnfko.mongodb.net/uptask?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }
        );

        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB Conectado en: ${url}`)
    } catch (error) {
        console.log(`error: ${error.message}`);
        process.exit(1);  // Forzar que el proceso termine;
    }
}

export default conectarDB;