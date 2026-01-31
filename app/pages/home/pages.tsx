import Footer from "@/app/components/global/footer";
import Navbar from "@/app/components/global/navbar";
import About from "@/app/components/hompages/about";
import Contact from "@/app/components/hompages/contact";
import Onbording from "@/app/components/hompages/onbording";
import ProfesionalExperience from "@/app/components/hompages/profesional_experience";
import Service from "@/app/components/hompages/service";

export default function HomePages() {
    return (
        <div>
            <Navbar />
            <main>
                <Onbording />
                <About />
                <Service />
                <ProfesionalExperience />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}