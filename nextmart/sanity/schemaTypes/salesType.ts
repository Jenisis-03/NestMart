import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const salesType = defineType({
  name: "sales",
  title: "Sales",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Sale Title",
    }),
    defineField({
      name: "Description",
      type: "text",
      title: "Sale Description",
    }),
    defineField({
      name: "discountAmount",
      type: "number",
      title: "Discount Amount",
      description: "Amount off in percentage or fixed value",
    }),
    defineField({
      name: "couponCode",
      type: "string",
      title: "Coupon Code",
    }),
    defineField({
      name: "ValidForm",
      type: "datetime",
      title: "valid Form",
    }),
    defineField({
      name: "validUntile",
      type: "datetime",
      title: "valid Until",
    }),
    defineField({
      name: "isActive",
      type: "boolean",
      title: "is Active",
      description: "Toggle to Active/Deactivate The Sale",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      discountAmount: "discountAmount",
      couponCode: "couponCode",
      isActive: "isActive",
    },
    prepare(selection) {
      const { title, discountAmount, couponCode, isActive } = selection;
      const status = isActive ? "Active" : "Inactive";
      return {
        title: title,
        subtitle: `Discount Amount: ${discountAmount}% - Coupon Code: ${couponCode} - Status: ${status}`,
      };
    },
  },
});
