import Image from "next/image";
import styles from "./page.module.css";
import LocaleSwitcher from "./components/LocaleSwitcher";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";
import Counter from "./components/Counter";

export default async function Home(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);
  
  return (
    <div>
      <LocaleSwitcher />
      <div>
        <p>Current locale: {lang}</p>
        <p>
          This text is rendered on the server:{" "}
          {dictionary["server-component"].welcome}
        </p>
        <Counter dictionary={dictionary.counter} />
      </div>
    </div>
  );
}
