import { Menu, Button, Text, MantineProvider, Avatar, rem } from '@mantine/core';
import { 
  IconSettings, 
  IconSearch, 
  IconPhoto, 
  IconMessageCircle, 
  IconTrash, 
  IconArrowsLeftRight 
} from '@tabler/icons-react';

const ProfileMenu = () => {
  return (
    
      <Menu shadow="md" width={200}>
        <Menu.Target>
         <div className='flex items-center gap-3 cursor-pointer'>
            <span className='font-medium  text-lg text-neutral-900'>Yanshi</span>
             <Avatar variant='filled' src={"avtor.png"} size={45} alt="it's me "/>
         </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item leftSection={<IconSettings style={{width : rem(14) , height:rem(14)}} />}>Settings</Menu.Item>
          <Menu.Item leftSection={<IconMessageCircle style={{width : rem(14) , height:rem(14)}} />}>Messages</Menu.Item>
          <Menu.Item leftSection={<IconPhoto style={{width: rem(14), height: rem(14)}} />}>Gallery</Menu.Item>

          <Menu.Item
            leftSection={<IconSearch style={{width : rem(14) , height: rem(14)}}/>}
            rightSection={<Text size="xs" c="dimmed">⌘K</Text>}
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item leftSection={<IconArrowsLeftRight style={{width:rem(14), height:rem(14) }} />}>
            Transfer my data
          </Menu.Item>

          <Menu.Item c="red" leftSection={<IconTrash style={{width: rem(14), height:rem(14)}} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
   
  );
};

export default ProfileMenu;


