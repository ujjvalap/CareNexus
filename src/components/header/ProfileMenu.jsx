import { Menu, Button, Text, MantineProvider, Avatar } from '@mantine/core';
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
         <div className='flex items-center gap-3'>
            <span className='font-medium text-neutral-900'>Ujjval</span>
             <Avatar variant='filled' src={"avtor.png"} size={45} alt="it's me "/>
         </div>
        </Menu.Target>

        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item icon={<IconSettings size={14} />}>Settings</Menu.Item>
          <Menu.Item icon={<IconMessageCircle size={14} />}>Messages</Menu.Item>
          <Menu.Item icon={<IconPhoto size={14} />}>Gallery</Menu.Item>

          <Menu.Item
            icon={<IconSearch size={14} />}
            rightSection={<Text size="xs" c="dimmed">⌘K</Text>}
          >
            Search
          </Menu.Item>

          <Menu.Divider />

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item icon={<IconArrowsLeftRight size={14} />}>
            Transfer my data
          </Menu.Item>

          <Menu.Item c="red" icon={<IconTrash size={14} />}>
            Delete my account
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
   
  );
};

export default ProfileMenu;
