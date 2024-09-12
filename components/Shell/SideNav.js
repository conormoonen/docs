import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const items = [
  {
    group: 'Start',
    // title: 'Get started',
    links: [
      { href: '/', children: 'Getting Started' }, 
      { href: '/wizard', children: 'StationOps Wizard' }
    ]
  },
  {
    group: 'Configure',
    links: [
      { href: '/create-project', children: 'Create Project' },
      { href: '/configure/create-environment', children: 'Create Environment' },
      { href: '/configure/create-service', children: 'Create Service' },
      { href: '/configure/create-configuration', children: 'Create Configuration' }
    ]
  },
  {
    group: 'Configure',
    title: 'Services',
    links: [
      { href: '/configure/configure-service', children: 'Configure Service' },
      { href: '/configure/configure-environment-variables', children: 'Environment Variables' }
    ]
  },
  {
    group: 'Configure',
    title: 'Datastore',
    links: [
      { href: '/configure/configure-datastore', children: 'Configure Datastore' }
    ]
  },
  {
    group: 'Configure',
    title: 'Components',
    links: [
      { href: '/configure/configure-queue', children: 'Queue' },
      { href: '/configure/configure-storage', children: 'Storage' }
    ]
  },
  {
    group: 'Deploy',
    title: 'Infrastructure',
    links: [
      { href: '/deploy/deploy-infrastructure', children: 'Deploy Infrastructure' },
    ]
  },
  {
    group: 'Deploy',
    title: 'Services',
    links: [
      { href: '/deploy/trigger-package-build', children: 'Trigger Package Build' },
      { href: '/deploy/create-release', children: 'Create Release' },
      { href: '/deploy/deploy-release', children: 'Deploy Release' },
    ]
  },
  {
    group: 'Manage',
    links: [
      { href: '/manage/architecture', children: 'Architecture' },
      { href: '/manage/restart', children: 'Restarts' },
      { href: '/manage/rollback', children: 'Rollback' }
    ]
  },
  {
    group: 'Access',
    links: [
      { href: '/access/access-overview', children: 'Access Overview' },
      { href: '/access/organisation-members', children: 'Organisation Members' },
      { href: '/access/user-groups', children: 'User Groups' },
      { href: '/access/permissions', children: 'Permissions' }
    ]
  },
  {
    group: 'Webhooks',
    links: [
      { href: '/webhooks/webhooks-overview', children: 'Overview' }
    ]
  }
];


const groupedItems = Object.entries(items.reduce((acc, item) => {
  const key = item.group;
  if (!acc[key]) {
    acc[key] = [];
  }
  acc[key].push(item);
  return acc;
}, {}));

export function SideNav() {
  const router = useRouter();

  return (
    <nav className="sidenav p-0 bg-gray-200 ">
      {groupedItems.map(([group, items])  => (
          <div>
            { group && <h2 className={'sticky z-50 top-0 mt-0 pr-4 pl-4 pb-2 pt-2 border-gray-300 bg-gray-100 border-b border-t'}>{group}</h2> }
         <div className={'mb-4'}>
           {items.map((item) => (
               <div key={item.title} className={'pr-4 pl-4'}>
                 <h3 className={'text-gray-500'}>{item.title}</h3>
                 <ul className="flex column">
                   {item.links.map((link) => {
                     const active = router.pathname === link.href;
                     return (
                         <li key={link.href} className={[(active ? 'active' : '') + (!item.title? ' ml-0': '')]}>
                           <Link {...link}>
                             <a href={link.href}>{link.children}</a>
                           </Link>
                         </li>
                     );
                   })}
                 </ul>
               </div>
           ))}
         </div>


        </div>
      ))}
      <style jsx>
        {`
          nav {
            /* https://stackoverflow.com/questions/66898327/how-to-keep-footer-from-pushing-up-sticky-sidebar */
            position: sticky;
            top: var(--nav-height);
            height: calc(100vh - var(--nav-height));
            flex: 0 0 240px;
            overflow-y: auto;
            .padding: 2rem 0 2rem 2rem;
          }
          h3 {
            font-weight: 500;
            margin: 0.5rem 0 0;
            padding-bottom: 0.5rem;
          }
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            list-style-type: none;
            margin: 0 0 0.7rem 0.7rem;
            font-size: 14px;
            font-weight: 400;
          }
          
          li.ml-0{
            margin-left: 0px;
          }
          
          li a {
            text-decoration: none;
          }
          li a:hover,
          li.active > a {
            text-decoration: underline;
          }
          @media screen and (max-width: 600px) {
            nav {
              display: none;
            }
          }
        `}
      </style>
    </nav>
  );
}
