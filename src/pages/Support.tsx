import { useState } from "react";
import {
  LifeBuoy,
  Wrench,
  Wifi,
  CreditCard,
  Truck,
  Headset,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const supportAreas = [
  { icon: Headset, title: "Technical Support", description: "General technical questions about assigned hardware or access." },
  { icon: Wrench, title: "Host Support", description: "Help for Infrastructure Hosts with equipment or installation issues." },
  { icon: LifeBuoy, title: "Customer Support", description: "Account, access, and general customer questions." },
  { icon: Wrench, title: "Equipment Issues", description: "Report a hardware fault or malfunction." },
  { icon: Wifi, title: "Network Issues", description: "Report connectivity or outage issues." },
  { icon: CreditCard, title: "Billing", description: "Questions about invoices or host compensation." },
  { icon: Truck, title: "Shipping", description: "Questions about equipment shipment or delivery." },
];

const Support = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support ticket submitted",
      description: "Our team will follow up by email as soon as possible.",
    });
    setForm({ name: "", email: "", category: "", message: "" });
  };

  return (
    <div>
      <PageHero
        eyebrow="Support"
        title="Support for customers and Infrastructure Hosts."
        description="Reach our team for technical support, host support, billing, shipping, and equipment or network issues."
      />

      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1142px] px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {supportAreas.map((area) => (
              <div key={area.title} className="rounded-xl border border-border p-6">
                <area.icon className="mb-4 h-7 w-7 text-primary" />
                <h2 className="mb-2 text-base font-semibold text-secondary">{area.title}</h2>
                <p className="text-sm text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/sealing-shipment.avif"
                alt="Sealing an equipment shipment box"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/shipping-label.avif"
                alt="Applying a shipping label to an equipment package"
                className="h-48 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[640px] px-4">
          <div className="rounded-2xl border border-border bg-white p-6 sm:p-8">
            <h2 className="mb-6 text-xl font-bold text-secondary">
              Submit a support ticket
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Input
                  placeholder="Full name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <Input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <Select
                value={form.category}
                onValueChange={(value) => setForm({ ...form, category: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Ticket category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Technical Support</SelectItem>
                  <SelectItem value="host">Host Support</SelectItem>
                  <SelectItem value="customer">Customer Support</SelectItem>
                  <SelectItem value="equipment">Equipment Issue</SelectItem>
                  <SelectItem value="network">Network Issue</SelectItem>
                  <SelectItem value="billing">Billing</SelectItem>
                  <SelectItem value="shipping">Shipping</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Describe the issue"
                rows={5}
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
              />
              <Button type="submit" className="w-full">
                Submit ticket
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
