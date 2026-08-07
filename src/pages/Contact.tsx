import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { contactItems } from "@/data/contactData";

const iconFor = (type: string) => (type === "email" ? Mail : type === "phone" ? Phone : MapPin);

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    workloadType: "",
    numberOfUsers: "",
    hardware: "",
    locationRequirements: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request received",
      description: "Our infrastructure team will follow up by email as soon as possible.",
    });
    setForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      workloadType: "",
      numberOfUsers: "",
      hardware: "",
      locationRequirements: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Talk to our team"
        description="Whether you need computing infrastructure or want to become an Infrastructure Host, we're here to help."
      />

      <div className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1142px] gap-10 px-4 lg:grid-cols-2">
          {/* Customer path */}
          <div className="rounded-2xl border border-border p-6 sm:p-8">
            <h2 className="mb-2 text-xl font-bold text-secondary">
              Need computing infrastructure?
            </h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Tell us about your workload and we&apos;ll help you find the right configuration.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="name" placeholder="Name" required value={form.name} onChange={handleChange} />
                <Input name="company" placeholder="Company" value={form.company} onChange={handleChange} />
                <Input name="email" type="email" placeholder="Business email" required value={form.email} onChange={handleChange} />
                <Input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} />
                <Input name="workloadType" placeholder="Workload type" value={form.workloadType} onChange={handleChange} />
                <Input name="numberOfUsers" placeholder="Number of users" value={form.numberOfUsers} onChange={handleChange} />
              </div>
              <Input name="hardware" placeholder="Required hardware" value={form.hardware} onChange={handleChange} />
              <Input
                name="locationRequirements"
                placeholder="Location requirements"
                value={form.locationRequirements}
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                value={form.message}
                onChange={handleChange}
              />
              <Button type="submit" className="w-full">
                Request Infrastructure
              </Button>
            </form>
          </div>

          {/* Host path */}
          <div className="flex flex-col justify-between rounded-2xl bg-secondary p-6 text-white sm:p-8">
            <div>
              <h2 className="mb-2 text-xl font-bold">
                Interested in becoming an Infrastructure Host?
              </h2>
              <p className="mb-6 text-sm text-white/70">
                Provide space, reliable power, and stable internet for
                company-owned computing equipment and receive recurring
                compensation under a clear Host Agreement.
              </p>
              <ul className="mb-8 space-y-2 text-sm text-white/70">
                <li>Company-owned hardware, never purchased by the host</li>
                <li>Compensation according to your Host Agreement</li>
                <li>Full technical support from our team</li>
              </ul>
            </div>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-secondary">
              <Link to="/become-a-host">Apply to Host</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-[1142px] gap-6 px-4 sm:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = iconFor(item.type);
            return (
              <div key={item.id} className="flex items-start gap-3 rounded-xl border border-border p-5">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {item.label}
                  </div>
                  <a href={item.href} className="text-sm text-secondary hover:text-primary">
                    {item.display}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
