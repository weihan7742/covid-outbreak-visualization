import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Image,
    HStack
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface ICustomSelectProps {
    flags: {
        src: string;
        text: string;
    }[];

    value: any;
    placeholder?: string;
    onChange?: (newValue: any) => void;
}

const SelectFlag = (props: ICustomSelectProps) => {

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w="17%" >
                <HStack>
                    <Image
                        boxSize='2rem'
                        borderRadius='full'
                        src={props.value.src}
                        alt={props.value.text}
                        mr='5%'
                        />
                    <span>{props.value.text}</span>
                </HStack> 

            </MenuButton>
            <MenuList>
                {props.flags.map((flag, key) => (
                    <MenuItem key={key} onClick={() => props.onChange(flag)}>
                        <Image
                        boxSize='2rem'
                        borderRadius='full'
                        src={flag.src}
                        alt={flag.text}
                        mr='12px'
                        />
                        <span>{flag.text}</span>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    )
}

export default SelectFlag;