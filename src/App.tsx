import FormikComp from "./formik";
import { ReactForm } from "./react-form";

const enableFormik = true;

export default function App() {
	return enableFormik ? <FormikComp /> : <ReactForm />;
}
