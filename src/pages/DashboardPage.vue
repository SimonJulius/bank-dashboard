<script setup lang="ts">
import ClockIcon from '@/components/icons/ClockIcon.vue'
import DoubleCheck from '@/components/icons/DoubleCheck.vue'
import UsersIcon from '@/components/icons/UsersIcon.vue'
import TreasureBox from '@/components/icons/TreasureBox.vue'
import StatcardComponent from '@/components/shared/cards/StatcardComponent.vue'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import StatusTag from '@/components/shared/StatusTag.vue'
import BarChart from '@/components/shared/charts/BarChart.vue'
import SplinesChart from '@/components/shared/charts/SplinesChart.vue'
import { ChevronRight } from 'lucide-vue-next'

// defineProps<{}>()

interface AppRequest {
  title: number
  subtitle: string
  footer: {
    percentage: number
    period: string
  }
}

const appRequest: AppRequest[] = [
  {
    title: 1478286,
    subtitle: 'pending requests',
    footer: {
      percentage: 4.07,
      period: 'last month'
    }
  },
  {
    title: 478520,
    subtitle: 'approved requests',
    footer: {
      percentage: 0.24,
      period: 'last month'
    }
  },
  {
    title: 154872,
    subtitle: 'total agents',
    footer: {
      percentage: 1.64,
      period: 'last month'
    }
  },
  {
    title: 167,
    subtitle: 'total user',
    footer: {
      percentage: 0.0,
      period: 'last month'
    }
  }
]

const recentRequest = [
  {
    profile: {
      name: 'Michael Olu',
      email: 'michael@mail.com'
    },
    type: 'new agent',
    status: 'pending',
    date: '23/04/18'
  },
  {
    profile: {
      name: 'Chioma James',
      email: 'alexa@mail.com'
    },
    type: 'account deactivation',
    status: 'pending',
    date: '23/04/18'
  },
  {
    profile: {
      name: 'Boluwatife Ade',
      email: 'laurel@mail.com'
    },
    type: 'new user',
    status: 'active',
    date: '23/04/18'
  },
  {
    profile: {
      name: 'Miriam Eric',
      email: 'miriam@mail.com'
    },
    type: 'email auth',
    status: 'active',
    date: '23/04/18'
  }
]
</script>

<template>
  <div class="bg-gray-100 w-full px-6 max-sm:px-3 max-md:pb-24 pb-6">
    <div class="flex-between gap-6 pt-6 flex-wrap max-sm:gap-2">
      <div class="" v-for="item of appRequest" :key="item.title">
        <StatcardComponent :item="item" class="">
          <template #main-icon>
            <ClockIcon v-if="item.subtitle === 'pending requests'" />
            <DoubleCheck v-else-if="item.subtitle === 'approved requests'" />
            <UsersIcon v-else-if="item.subtitle === 'total user'" />
            <TreasureBox v-else />
          </template>
          <template #footer-icon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="null"
              viewBox="209.06 323.52 49.51 34.06"
              width="15"
              :class="item.subtitle === 'total user' ? 'text-yellow-500' : 'text-green-400'"
              class="max-md:hidden"
              v-if="item.subtitle !== 'total agents'"
            >
              <g stroke="null">
                <title stroke="null">Layer 1</title>
                <g id="svg_56">
                  <line
                    stroke-width="6"
                    id="svg_43"
                    y2="339.58287"
                    x2="231.05552"
                    y1="354.58287"
                    x1="212.05552"
                    stroke="currentColor"
                    fill="none"
                  ></line>
                  <path
                    id="svg_45"
                    d="m227.51126,339.16691l9,8"
                    opacity="undefined"
                    stroke-width="5"
                    stroke="currentColor"
                    fill="none"
                  ></path>
                  <line
                    stroke-width="5"
                    id="svg_46"
                    y2="332.05162"
                    x2="252.44546"
                    y1="347.05162"
                    x1="233.44546"
                    stroke="currentColor"
                    fill="none"
                  ></line>
                  <g id="svg_55">
                    <path
                      transform="rotate(-6 254.622 335.873)"
                      id="svg_52"
                      d="m254.96546,328.37266l-0.6875,15"
                      opacity="undefined"
                      stroke-width="5"
                      stroke="currentColor"
                      fill="none"
                    ></path>
                    <path
                      transform="rotate(12 247.651 328.277)"
                      stroke-width="5"
                      id="svg_53"
                      d="m256.15082,328.77677l-17,-1"
                      opacity="undefined"
                      stroke="currentColor"
                      fill="none"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke="null"
              class="text-red-500 max-md:hidden"
              v-else
              viewBox="198.5 307.62 36.84 30.89"
              width="15"
            >
              <g stroke="null">
                <title stroke="null">Layer 1</title>
                <g stroke="null" id="svg_57">
                  <line
                    stroke="currentColor"
                    stroke-width="6"
                    id="svg_43"
                    y2="333.6228"
                    x2="227.99983"
                    y1="319.07389"
                    x1="216.10662"
                    fill="none"
                  ></line>
                  <path
                    stroke="currentColor"
                    id="svg_45"
                    d="m219.39649,318.81802l-8.90778,6.39784"
                    opacity="undefined"
                    stroke-width="5"
                    fill="none"
                  ></path>
                  <line
                    stroke="currentColor"
                    stroke-width="5"
                    id="svg_46"
                    y2="325.08426"
                    x2="213.18972"
                    y1="310.11847"
                    x1="201.00103"
                    fill="none"
                  ></line>
                  <g stroke="null" id="svg_55">
                    <path
                      stroke="currentColor"
                      id="svg_52"
                      d="m230.87161,334.94155l-12.54769,0.56242"
                      opacity="undefined"
                      stroke-width="5"
                      fill="none"
                    ></path>
                    <path
                      stroke="currentColor"
                      stroke-width="5"
                      id="svg_53"
                      d="m229.06744,336.01114l3.77748,-10.44493"
                      opacity="undefined"
                      fill="none"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </template>
        </StatcardComponent>
      </div>
    </div>
    <div class="flex mt-8 gap-2 justify-between flex-wrap max-lg:gap-4">
      <div class="w-8/12 min-w-72 max-lg:w-full">
        <SplinesChart />
      </div>
      <div class="w-3/12 min-w-60 max-lg:w-full">
        <BarChart />
      </div>
    </div>
    <div class="mt-8 max-w-[800px] max-lg:w-full">
      <Table class="bg-white rounded-xl shadow-xl shadow-slate-200">
        <TableHeader class="pt-6">
          <TableRow class="h-[70px] border-none flex items-center px-6">
            <h4 class="h4-semibold text-dark-100">Recent Requests</h4>
          </TableRow>
          <TableRow class="">
            <TableHead class="w-[100px] px-6">
              <span class="text-gray-400 font-bold">Name/Email</span>
            </TableHead>
            <TableHead><span class="text-gray-400 font-bold">Type</span></TableHead>
            <TableHead><span class="text-gray-400 font-bold">Status</span></TableHead>
            <TableHead class="text-right"
              ><span class="text-gray-400 font-bold">Date</span></TableHead
            >
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody class="overflow-hidden">
          <TableRow v-for="request in recentRequest" :key="request.profile.email">
            <TableCell class="font-medium pl-6 flex gap-4">
              <span class="min-w-10 h-10 p-2 rounded-lg bg-gray-300 items-center"></span>
              <div>
                <div class="text-dark-100 font-semibold text-[16px]">
                  {{ request.profile.name }}
                </div>
                <div class="text-slate-400">
                  {{ request.profile.email }}
                </div>
              </div>
            </TableCell>
            <TableCell class="capitalize text-slate-400">{{ request.type }}</TableCell>
            <TableCell>
              <StatusTag :label="request.status" />
            </TableCell>
            <TableCell>
              {{ request.date }}
            </TableCell>
            <TableCell>
              <span class="h-[25px] w-[25px] flex-center rounded-full bg-[#cfe2f3] bg-opacity-50">
                <ChevronRight class="h-[20px] w-[20px] text-primary-500" />
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>

<style scoped></style>
