import { motion } from "framer-motion";
import {
FaGift,
FaBoxOpen,
FaBirthdayCake,
FaPrint,
} from "react-icons/fa";

import {
PageHeader,
LazyImage,
craftModules,
fadeUp,
} from "@/components/site/shared";

export default function SpecialitiesPage() {
const keys = Object.keys(craftModules);

const items = [
{
icon: FaPrint,
title: "Printing on Sweet Boxes",
img: craftModules[keys[0]],
desc: "Custom printing available on sweet boxes for weddings, events, functions, and branding.",
},
{
icon: FaGift,
title: "Custom Packaging",
img: craftModules[keys[1]] || craftModules[keys[0]],
desc: "Premium gift packaging. Luxury presentation. Festival collections.",
},
{
icon: FaBoxOpen,
title: "Special Crafts",
img: craftModules[keys[2]] || craftModules[keys[0]],
desc: "Traditional decorative arrangements. Customized designs. Handcrafted presentations.",
},
{
icon: FaBirthdayCake,
title: "Event Orders",
img: craftModules[keys[3]] || craftModules[keys[0]],
desc: "Wedding · Corporate · Temple · Bulk orders handled with precision.",
},
{
icon: FaGift,
title: "Festival Gift Hampers",
img: craftModules[keys[4]] || craftModules[keys[0]],
desc: "Customized festive hampers with sweets, snacks, and premium packaging.",
},
{
icon: FaPrint,
title: "Corporate Branding",
img: craftModules[keys[5]] || craftModules[keys[0]],
desc: "Personalized branding solutions for corporate gifting and events.",
},
{
icon: FaBoxOpen,
title: "Premium Return Gifts",
img: craftModules[keys[6]] || craftModules[keys[0]],
desc: "Beautiful return gifts for weddings, birthdays, and special occasions.",
},
{
icon: FaBirthdayCake,
title: "Bulk Celebration Orders",
img: craftModules[keys[7]] || craftModules[keys[0]],
desc: "Large-scale sweet and snack orders for celebrations and gatherings.",
},
];

return (
<> <PageHeader
     kicker="What we do best"
     title="Our Premium Specialties"
     subtitle="From custom-printed sweet boxes to grand wedding orders — we bring craft to every detail."
   />

```
  <section className="pb-24">
    <div className="mx-auto max-w-7xl px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {items.map(({ icon: Icon, title, img, desc }) => (
          <motion.div
            key={title}
            variants={fadeUp}
            className="group premium-card premium-card-hover"
          >
            <div className="relative">
              <LazyImage
                src={img}
                alt={title}
              />

              <div className="absolute top-3 left-3 h-11 w-11 rounded-full bg-[color:var(--royal)] text-[color:var(--brand)] flex items-center justify-center shadow-lg">
                <Icon />
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-bold text-lg text-foreground">
                {title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
</>


);
}
