import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "华中师范大学物联网协会",
  description: "This site belongs to the Internet of Things Association of Central China Normal University.",
  lastUpdated: true,
  ignoreDeadLinks:true,
  head: [['link', { rel: 'icon', href: '/pictures/icon.png' }]],
  markdown: {
    math: true,
    lineNumbers: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/pictures/logo.png',
    siteTitle: "CCNU IOT",
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present CCNU IOT'
    },
    nav: [
      { text: 'Hardware Group', 
        items: [
          { text: 'Embedded Software', link: '/hardware/embedded-software/'},
          { text: 'PCB Layout', link: '/hardware/pcb-layout/'},
          { text: 'Structural Design', link: '/hardware/struct-design/'}
        ]
      },
      { text: 'Algorithm Group', 
        items:[
          { text: 'Computer Vision', link: '/algorithms/vision/'},
          { text: 'Natural Language Processing', link: '/algorithms/natural-language/'},
          { text: 'Communication', link: '/algorithms/communication/'}
        ]
      },
      { text: 'Application Group', 
        items:[
          { text: 'Android', link: '/app/android/'},
          { text: 'Harmony OS', link: '/app/harmony/'},
          { text: 'Web', link: '/app/web/'}
        ]
      },
      {
        text: 'Association building',
        items: [
          { text: 'About us', link: '/association-building/about-us/' },
          { text: 'Members', link: '/association-building/members/' },
          { text: 'Meeting', link: '/association-building/meeting/' },
          { text: 'Team building', link: '/association-building/team-building/' }
        ]
      }
    ],

    sidebar: {
      // This sidebar gets displayed when a user
      // is on `guide` directory.
      '/hardware/embedded-software/': [
        {
          text: '破防板入门文档',
          collapsed: true,
          items: [
            { text: '破防板介绍', link: '/hardware/embedded-software/破防板介绍' },
            { text: '工程创建', link: '/hardware/embedded-software/工程创建' },
            { text: '独立按键', link: '/hardware/embedded-software/独立按键控制LED灯和蜂鸣器' },
            { text: '数码管动态扫描', link: '/hardware/embedded-software/数码管动态扫描' },
            { text: '定时器', link: '/hardware/embedded-software/定时器' },
            { text: 'LCD1602显示器', link: '/hardware/embedded-software/LCD1602显示器' },
            { text: '点阵屏', link: '/hardware/embedded-software/点阵屏' }
          ]
        }
      ],
      '/hardware/struct-design/': [
        {
          text: 'Linux',
          collapsed: true,
          items: [
            { text: 'Linux命令大全', link: '/hardware/struct-design/Linux命令大全' },
            { text: '实现ubuntu虚拟机和Windows的文件共享', link: '/hardware/struct-design/实现ubuntu虚拟机和Windows的文件共享' },
            { text: 'Ubuntu22.04虚拟机实现科学上网', link: '/hardware/struct-design/Ubuntu22.04虚拟机实现科学上网' }
          ]
        },
        {
            text: 'Git学习',
            collapsed: true,
            items: [
              { text: 'Git本地到远程', link: '/hardware/struct-design/Git本地到远程' },
              { text: 'Git常用命令及工作原理', link: '/hardware/struct-design/Git常用命令及工作原理' }
            ]
        },
        {
          text: 'vscode环境配置',
          collapsed: true,
          items: [
            { text: 'Windows配置vscode的CC++环境', link: '/hardware/struct-design/Windows配置vscode的CC++环境' }
          ]
        }
      ],
      '/association-building/meeting/': [
        {
          text: '每周例会',
          collapsed: true,
          items: [

          ]
        },
        {
          text: '技术分享会',
          collapsed: true,
          items:[
            
          ]
        }
      ],
      '/association-building/team-building/': [
        {
          text: '协会团建',
          collapsed: true,
          items: [
            {
              text: 'First half of 2023',
              collapsed: true,
              items: [
                { text: '2023-5-21', link: '/association-building/team-building/first-half-2023/2023-5-21'}
              ]
            }
          ]
        },
        {
          text: '协会培训',
          collapsed: true,
          items: [

          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
