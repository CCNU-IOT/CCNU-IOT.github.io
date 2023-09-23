---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const member_mt = [
  {
    avatar: '/pictures/yaohuaxiong.png',
    name: '姚华雄教授',
    title: '华中师范大学物联网协会指导老师、物联网工程系主任、物联网工程系党支部书记、物联网实验室主任',
    links: [
      { icon: 'github', link: 'http://cs.ccnu.edu.cn/info/1110/1854.htm' },
    ]
  },
  {
    avatar: 'https://github.com/jdccccc.png',
    name: '蒋东辰',
    title: '2019级物联网协会会长、现中科院计算所研究生',
    links: [
      { icon: 'github', link: 'https://github.com/jdccccc' },
    ]
  },
]
const member_hardware = [
  {
    avatar: 'https://github.com/Nick-JY.png',
    name: 'Nickal JY',
    title: '现物联网协会会长、华中师范大学计算机学院2021级物联网工程系、嵌入式软件负责人',
    links: [
      { icon: 'github', link: 'https://github.com/Nick-JY' },
    ]
  },
  {
    avatar: 'https://github.com/RuthlessZhang.png',
    name: 'RuthlessZhang',
    title: '物联网协会PCB设计负责人、华中师范大学计算机学院2021级计算机科学与技术系',
    links: [
      { icon: 'github', link: 'https://github.com/RuthlessZhang' },
    ]
  },
  {
    avatar: 'https://github.com/chengkhen.png',
    name: 'chengkhen',
    title: '物联网协会结构设计负责人、华中师范大学计算机学院2021级计算机科学与技术系',
    links: [
      { icon: 'github', link: 'https://github.com/chengkhen' },
    ]
  },
  {
    avatar: 'https://github.com/undefined-0.png',
    name: 'undefined-0',
    title: '物联网协会嵌入式软件成员、华中师范大学物理科学与技术学院2022级通信工程系',
    links: [
      { icon: 'github', link: 'https://github.com/undefined-0' },
    ]
  },
  {
    avatar: 'https://github.com/Hiraethsev.png',
    name: 'Hiraethsev',
    title: '物联网协会PCB设计成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/Hiraethsev' },
    ]
  },
  {
    avatar: 'https://github.com/Hzc576.png',
    name: 'Hzc576',
    title: '物联网协会PCB设计成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/Hzc576' },
    ]
  },
  {
    avatar: 'https://github.com/baratheon0127.png',
    name: 'baratheon0127',
    title: '物联网协会PCB设计成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/baratheon0127' },
    ]
  },
  {
    avatar: 'https://github.com/qhongyxy.png',
    name: 'qhongyxy',
    title: '物联网协会结构设计成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/qhongyxy' },
    ]
  },
  {
    avatar: 'https://github.com/Axying.png',
    name: 'Axying',
    title: '物联网协会结构设计成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/Axying' },
    ]
  },
]
const member_algorithm = [
  {
    avatar: 'https://github.com/fuxiaoiii.png',
    name: 'fuxiaoiii',
    title: '物联网协会AI负责人、华中师范大学计算机学院2021级计算机科学与技术系(基地班)',
    links: [
      { icon: 'github', link: 'https://github.com/fuxiaoiii' },
    ]
  },
  {
    avatar: 'https://github.com/Ycsir510.png',
    name: 'Ycsir510',
    title: '物联网协会AI负责人、华中师范大学计算机学院2021级软件工程系',
    links: [
      { icon: 'github', link: 'https://github.com/Ycsir510' },
    ]
  },
  {
    avatar: 'https://github.com/LSJZXY.png',
    name: 'LSJZXY',
    title: '物联网协会通信组负责人、华中师范大学计算机学院2021级计算机科学与技术系',
    links: [
      { icon: 'github', link: 'https://github.com/LSJZXY' },
    ]
  },
  {
    avatar: 'https://github.com/qtstu.png',
    name: 'qtstu',
    title: '物联网协会AI成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/qtstu' },
    ]
  },
  {
    avatar: 'https://github.com/77lv1122.png',
    name: '77lv1122',
    title: '物联网协会AI成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/77lv1122' },
    ]
  },
  {
    avatar: 'https://github.com/y-Lisi.png',
    name: 'y-Lisi',
    title: '物联网协会AI成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/y-Lisi' },
    ]
  },
  {
    avatar: 'https://github.com/Dr-ose.png',
    name: 'Dr-ose',
    title: '物联网协会通信组成员、华中师范大学物理科学与技术学院2022级通信工程系',
    links: [
      { icon: 'github', link: 'https://github.com/Dr-ose' },
    ]
  },
  {
    avatar: 'https://github.com/ROYAN118.png',
    name: 'ROYAN118',
    title: '物联网协会通信组成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/ROYAN118' },
    ]
  },
]
const member_app = [
  {
    avatar: 'https://github.com/fograinwater.png',
    name: 'fograinwater',
    title: '物联网协会APP组负责人、华中师范大学计算机学院2021级计算机科学与技术系(基地班)',
    links: [
      { icon: 'github', link: 'https://github.com/fograinwater' },
    ]
  },
  {
    avatar: 'https://github.com/sandeulllll.png',
    name: 'sandeulllll',
    title: '物联网协会APP组负责人、华中师范大学计算机学院2021级计算机科学与技术系',
    links: [
      { icon: 'github', link: 'https://github.com/sandeulllll' },
    ]
  },
  {
    avatar: 'https://github.com/patataaaaaaaaa.png',
    name: 'patataaaaaaaaa',
    title: '物联网协会APP组负责人、华中师范大学计算机学院2021级计算机科学与技术系',
    links: [
      { icon: 'github', link: 'https://github.com/patataaaaaaaaa' },
    ]
  },
  {
    avatar: 'https://github.com/Goyaccc.png',
    name: 'Goyaccc',
    title: '物联网协会APP组成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/Goyaccc' },
    ]
  },
  {
    avatar: 'https://github.com/zx-zxx.png',
    name: 'zx-zxx',
    title: '物联网协会APP组成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/zx-zxx' },
    ]
  },
  {
    avatar: 'https://github.com/Luody.png',
    name: 'Luody',
    title: '物联网协会APP组成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/Luody' },
    ]
  },
  {
    avatar: 'https://github.com/be-abandoned.png',
    name: 'be-abandoned',
    title: '物联网协会APP组成员、华中师范大学计算机学院2022级计算机类',
    links: [
      { icon: 'github', link: 'https://github.com/be-abandoned' },
    ]
  },
]
const member_person = [
  {
    avatar: 'https://github.com/Eazinqi.png',
    name: 'Eazinqi',
    title: '物联网协会人事部负责人、物联网协会宣传专员、华中师范大学计算机学院2021级计算机科学与技术系',
    links: [
      { icon: 'github', link: 'https://github.com/Eazinqi' },
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>IOT Members</template>
    <template #lead>物联网协会成员</template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Instructor</template>
    <template #lead>指导老师</template>
    <template #members>
      <VPTeamMembers size="medium" :members="member_mt" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Hardware Group</template>
    <template #lead>硬件组</template>
    <template #members>
      <VPTeamMembers size="medium" :members="member_hardware" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Algorithm Group</template>
    <template #lead>算法组</template>
    <template #members>
      <VPTeamMembers size="medium" :members="member_algorithm" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Application Group</template>
    <template #lead>APP组</template>
    <template #members>
      <VPTeamMembers size="medium" :members="member_app" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Personnel Department</template>
    <template #lead>人事部</template>
    <template #members>
      <VPTeamMembers size="medium" :members="member_person" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
