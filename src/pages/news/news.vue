<script setup>
import { ref, computed, nextTick } from "vue";
import infoData from "@/components/data/infoData";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
  Users,
  Heart,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-vue-next";
import img1 from "@/assets/images/image15.jpeg";
import img2 from "@/assets/images/image2.jpg";
const newsDetails = [
  {
    id: 1,
    image: img1,
    title: "Gombe Branch Feeding Outreach",
    description:
      "A community wide feeding outreach organized by our Gombe branch, providing nutritious meals and essential support to vulnerable individuals and families.",
    content: [
      {
        type: "paragraph",
        text: "The Gombe Branch Feeding Outreach was successfully carried out to address immediate food needs among vulnerable members of the community. The initiative brought together volunteers, coordinators, and community leaders in a shared effort to provide meals with dignity, compassion, and respect.",
      },
      {
        type: "paragraph",
        text: "This outreach focused on reaching low income households, street children, the elderly, and individuals facing food insecurity. Beyond meal distribution, the program created a space for connection, care, and reassurance, reminding beneficiaries that they are seen, valued, and supported.",
      },
      {
        type: "heading",
        text: "Program Highlights",
      },
      {
        type: "list",
        items: [
          "Preparation and distribution of nutritious, well-balanced meals",
          "Over 500 individuals reached across key locations in Gombe",
          "Dedicated volunteer teams ensuring orderly and respectful distribution",
          "Community engagement to identify and support the most vulnerable groups",
        ],
      },
      {
        type: "paragraph",
        text: "The success of the Gombe feeding outreach reflects our ongoing commitment to alleviating hunger and promoting community welfare. Through collective effort and generosity, the initiative helped ease immediate hardship while strengthening bonds within the community.",
      },
    ],
    date: "March 03, 2026",
    category: "Welfare & Relief",
    icon: Users,
    stats: "200+ People Fed",
    author: "Feeding Outreach Committee",
    readTime: "5 min read",
    location: "Gombe Community",
    tags: ["Feeding Outreach", "Community Support", "Hunger Relief"],
  },
  {
    id: 2,
    image: img2,
    title: "Kaduna Branch Feeding Outreach",
    description:
      "A humanitarian feeding outreach carried out by our Kaduna branch, providing nutritious meals and essential assistance to vulnerable individuals and families within the community.",
    content: [
      {
        type: "paragraph",
        text: "The Kaduna Branch Feeding Outreach was organized to support vulnerable individuals and families facing food insecurity within the community. Volunteers, coordinators, and community leaders worked together to ensure that nutritious meals were prepared and distributed in an organized and respectful manner.",
      },
      {
        type: "paragraph",
        text: "The outreach focused on reaching widows, elderly individuals, street children, and low income households. In addition to providing meals, the program also created an atmosphere of compassion, unity, and community care, reminding beneficiaries that they are valued and supported.",
      },
      {
        type: "heading",
        text: "Program Highlights",
      },
      {
        type: "list",
        items: [
          "Preparation and distribution of freshly cooked nutritious meals",
          "Over 250 individuals reached across selected areas of Kaduna",
          "Dedicated volunteer teams ensuring smooth and respectful distribution",
          "Community engagement to identify and support the most vulnerable groups",
        ],
      },
      {
        type: "paragraph",
        text: "The Kaduna feeding outreach reflects our continued commitment to addressing hunger and supporting communities in need. Through collective effort, generosity, and compassion, the initiative helped reduce hardship and strengthen the bond between volunteers and the community.",
      },
    ],
    date: "March 06, 2026",
    category: "Welfare & Relief",
    icon: Users,
    stats: "180+ People Fed",
    author: "Feeding Outreach Committee",
    readTime: "5 min read",
    location: "Kaduna Community",
    tags: ["Feeding Outreach", "Community Support", "Hunger Relief"],
  },
];

const selectedId = ref(newsDetails[0].id);
const articleRef = ref(null);

const newsDetail = computed(() =>
  newsDetails.find((n) => n.id === selectedId.value),
);

const selectNews = async (id) => {
  selectedId.value = id;

  await nextTick();
  articleRef.value?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 pb-10">
    <!-- Main Content -->
    <div class="px-6">
      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Article Section -->
        <div class="w-full lg:flex-1">
          <article class="bg-white rounded shadow-lg overflow-hidden">
            <!-- Featured Image -->
            <div class="relative overflow-hidden">
              <img
                :src="newsDetail?.image"
                :alt="newsDetail?.title"
                class="w-full h-64 md:h-96 object-cover object-top"
              />
              <div class="absolute inset-0"></div>
            </div>
            <!-- Article Content -->
            <div class="p-6 md:p-8">
              <!-- Stats -->
              <div class="flex items-center gap-2 mb-4">
                <div class="w-2 h-2 bg-primary2 rounded-full"></div>
                <span class="text-xs font-semibold text-primary2">{{
                  newsDetail?.stats
                }}</span>
              </div>

              <!-- Title -->
              <h1
                class="text-sm md:text-xl font-bold text-primary1 mb-6 leading-tight"
              >
                {{ newsDetail?.title }}
              </h1>

              <!-- Meta Information -->
              <div
                class="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 md:gap-4 md:mb-8 pb-6 border-b-2 border-gray-100"
              >
                <div class="flex items-center gap-2 text-gray-600">
                  <Calendar class="size-3" />
                  <span class="text-xs font-medium">{{
                    newsDetail?.date
                  }}</span>
                </div>
                <div class="flex items-center gap-2 text-gray-600">
                  <Clock class="size-3" />
                  <span class="text-xs font-medium">{{
                    newsDetail?.readTime
                  }}</span>
                </div>
                <div class="flex items-center gap-2 text-gray-600">
                  <User class="size-3" />
                  <span class="text-xs font-medium">
                    {{ newsDetail?.author }}</span
                  >
                </div>
                <div class="flex items-center gap-2 text-gray-600">
                  <Users class="size-3" />
                  <span class="text-xs font-medium">{{
                    newsDetail?.location
                  }}</span>
                </div>
              </div>

              <!-- Article Body -->
              <div
                class="prose prose-lg mb-6 md:mb-8 text-gray-700 leading-relaxed text-[14px]"
                style="line-height: 2rem"
              >
                <template
                  v-for="(block, index) in newsDetail?.content"
                  :key="index"
                >
                  <p v-if="block.type === 'paragraph'" class="mb-4">
                    {{ block.text }}
                  </p>
                  <h3
                    v-else-if="block.type === 'heading'"
                    class="text-lg font-bold text-primary1 mb-4"
                  >
                    {{ block.text }}
                  </h3>
                  <ul
                    v-else-if="block.type === 'list'"
                    class="mb-6 space-y-2 list-disc list-inside text-sm"
                    style="line-height: 3rem"
                  >
                    <li v-for="(item, i) in block.items" :key="i">
                      {{ item }}
                    </li>
                  </ul>
                </template>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2 mb-6 md:mb-8">
                <span
                  v-for="tag in newsDetail?.tags"
                  :key="tag"
                  class="px-3 py-1 bg-gray-50 text-primary1 rounded-full font-medium text-xs"
                >
                  {{ tag }}
                </span>
              </div>

              <!-- Share Section -->
              <div
                class="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 border-t border-gray-100 gap-4"
              >
                <div class="flex items-center gap-2 text-gray-600">
                  <Share2 class="size-5 text-primary2" />
                  <span class="text-xs md:text-sm font-medium"
                    >Follow Us On Socials For More Updates</span
                  >
                </div>

                <div class="flex flex-wrap gap-3">
                  <a
                    v-for="(social, index) in infoData?.socialLinks"
                    :key="index"
                    :href="social.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="p-2 rounded-full bg-white/5 hover:bg-primary7/10 transition-colors"
                  >
                    <div
                      class="bg-primary2/10 p-2 rounded-full border border-primary2/20 hover:duration-300 hover:transition-all"
                    >
                      <component
                        :is="social.icon"
                        class="w-5 h-5 text-primary2 hover:text-primary2/90 transition"
                      />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>

        <!-- Related News Section -->
        <div class="w-full lg:w-96 lg:flex-shrink-0">
          <section class="bg-white rounded shadow-sm p-6 xl:sticky xl:top-24">
            <h2
              class="text-lg font-bold text-primary1 mb-6 pb-3 border-b-2 border-gray-100"
            >
              Related Updates
            </h2>
            <div class="space-y-4">
              <div
                v-for="item in newsDetails"
                :key="item.id"
                @click="selectNews(item.id)"
                class="flex cursor-pointer hover:bg-gray-50 rounded transition"
              >
                <div class="flex">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-24 object-cover self-stretch flex-shrink-0"
                  />

                  <div class="p-3 flex-1">
                    <h3
                      class="font-semibold text-primary1 text-sm mb-2 line-clamp-2 hover:text-primary2 transition-colors duration-300"
                    >
                      {{ item.title }}
                    </h3>

                    <p class="text-xs text-gray-600 line-clamp-2 mb-2">
                      {{ item.description }}
                    </p>

                    <div class="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar class="size-3" />
                      <span>{{ item.date }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
