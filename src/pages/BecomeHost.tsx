import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import {
  whatWeProvide,
  hostResponsibilities,
  compensationStructure,
  hostApplicationProcess,
} from "@/data/hostData";
import { Check, X } from "lucide-react";

const yesNo = z.enum(["yes", "no"], { required_error: "Please select an option" });

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Phone number is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(3, "ZIP code is required"),
  locationType: z.enum(["home", "office", "commercial", "other"]),
  isp: z.string().min(1, "Internet provider is required"),
  connectionType: z.string().min(1, "Connection type is required"),
  downloadSpeed: z.string().min(1, "Approximate download speed is required"),
  uploadSpeed: z.string().min(1, "Approximate upload speed is required"),
  online247: yesNo,
  reliableElectricity: yesNo,
  secureLocation: yesNo,
  willingEquipment: yesNo,
  hasExperience: yesNo,
  additionalInfo: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: "You must confirm before submitting" }),
  }),
});

type FormValues = z.infer<typeof formSchema>;

const YesNoField = ({
  form,
  name,
  label,
}: {
  form: ReturnType<typeof useForm<FormValues>>;
  name: keyof FormValues;
  label: string;
}) => (
  <FormField
    control={form.control}
    name={name}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <RadioGroup
            className="flex gap-6"
            onValueChange={field.onChange}
            value={field.value as string}
          >
            <label className="flex items-center gap-2 text-sm">
              <RadioGroupItem value="yes" /> Yes
            </label>
            <label className="flex items-center gap-2 text-sm">
              <RadioGroupItem value="no" /> No
            </label>
          </RadioGroup>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

const BecomeHost = () => {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      zip: "",
      isp: "",
      connectionType: "",
      downloadSpeed: "",
      uploadSpeed: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    toast({
      title: "Application received",
      description:
        "Thanks for applying. Our team will review your location and follow up by email.",
    });
    form.reset();
  };

  return (
    <div>
      <PageHero
        eyebrow="Become a Host"
        title="Become an Infrastructure Host"
        description="Provide space, reliable power, and stable internet for company-owned computing equipment and receive recurring compensation."
        primaryCta={{ label: "Apply to Become a Host", to: "#apply" }}
        secondaryCta={{ label: "Host Requirements", to: "/become-a-host/requirements" }}
      />

      {/* What we provide / what host provides */}
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4">
          <h2 className="mb-6 text-center text-2xl font-bold text-secondary sm:text-3xl">
            We provide the infrastructure. You provide the location.
          </h2>
          <div className="mb-10 overflow-hidden rounded-2xl">
            <img
              src="/images/secure-equipment-packaging.png"
              alt="Company-owned laptop securely packaged for shipment to a Host location"
              className="h-56 w-full object-cover sm:h-72"
              loading="lazy"
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-secondary">
                The company provides
              </h3>
              <ul className="space-y-2.5">
                {whatWeProvide.company.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-secondary">
                The host provides
              </h3>
              <ul className="space-y-2.5">
                {whatWeProvide.host.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-[1000px] px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-secondary sm:text-3xl">
            Host responsibilities
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-secondary">
                Hosts are responsible for
              </h3>
              <ul className="space-y-2.5">
                {hostResponsibilities.is.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-white p-6">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-secondary">
                Hosts are NOT responsible for
              </h3>
              <ul className="space-y-2.5">
                {hostResponsibilities.isNot.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <X className="mt-0.5 h-4 w-4 shrink-0 text-destructive" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Compensation */}
      <div className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1142px] px-4">
          <h2 className="mb-4 text-center text-2xl font-bold text-secondary sm:text-3xl">
            Host compensation
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-muted-foreground sm:text-base">
            Hosts receive compensation based on equipment type, location,
            connectivity requirements, availability, and the terms of the
            Host Agreement.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {compensationStructure.map((item) => (
              <div key={item.title} className="rounded-xl border border-border p-6">
                <h3 className="mb-2 text-sm font-semibold text-secondary">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application process */}
      <div className="bg-muted/40 py-16 sm:py-20">
        <div className="mx-auto max-w-[1142px] px-4">
          <h2 className="mb-10 text-center text-2xl font-bold text-secondary sm:text-3xl">
            Application process
          </h2>
          <ProcessTimeline steps={hostApplicationProcess} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/equipment-delivery.avif"
                alt="Company-owned equipment being delivered to an approved Host location"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/device-retrieval-shipping.avif"
                alt="Unpacking company-owned equipment shipped to a Host location"
                className="h-56 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Application form */}
      <div id="apply" className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[720px] px-4">
          <h2 className="mb-2 text-center text-2xl font-bold text-secondary sm:text-3xl">
            Infrastructure Host application
          </h2>
          <p className="mb-10 text-center text-sm text-muted-foreground">
            We only collect what's needed to review your location. Shipping
            address, identity verification, and tax information are collected
            later, after you've progressed through onboarding.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="zip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ZIP Code</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="locationType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type of location</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="commercial">Commercial space</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="isp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Internet provider</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="connectionType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Internet connection type</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Fiber, Cable, DSL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="downloadSpeed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Approximate download speed</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 300 Mbps" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="uploadSpeed"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Approximate upload speed</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. 50 Mbps" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <YesNoField form={form} name="online247" label="Can you maintain a device online 24/7?" />
              <YesNoField form={form} name="reliableElectricity" label="Do you have reliable electricity?" />
              <YesNoField form={form} name="secureLocation" label="Do you have a secure indoor location?" />
              <YesNoField form={form} name="willingEquipment" label="Are you willing to receive company-owned equipment?" />
              <YesNoField form={form} name="hasExperience" label="Do you have experience with computers or networking?" />

              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional information (optional)</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consent"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start gap-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value === true}
                        onCheckedChange={(checked) => field.onChange(checked === true)}
                      />
                    </FormControl>
                    <div>
                      <FormLabel className="font-normal leading-snug">
                        I confirm that the information provided is accurate and
                        I agree to be contacted regarding the Infrastructure
                        Host program.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" size="lg" className="w-full">
                Submit application
              </Button>
            </form>
          </Form>
        </div>
      </div>

      <div className="bg-muted/40 py-16 sm:py-20 lg:py-24">
        <CTASection
          title="Still have questions?"
          description="Check the Host FAQ or review requirements before you apply."
          primaryCta={{ label: "Host FAQ", to: "/become-a-host/faq" }}
          secondaryCta={{ label: "Host Requirements", to: "/become-a-host/requirements" }}
        />
      </div>
    </div>
  );
};

export default BecomeHost;
