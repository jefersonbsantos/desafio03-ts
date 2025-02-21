import { Box, Text, Button } from '@chakra-ui/react'
import { useContext } from 'react'
import { AppContext } from '../components/AppContext'
import { useNavigate } from 'react-router-dom'

export const UserProfile = () => {
    const { user, logout } = useContext(AppContext)
    const navigate = useNavigate()

    if (!user) {
        navigate('/')
    }

    return (
        <Box padding="25px">
            <Text fontSize="2xl" mb={4}>Perfil do Usuário</Text>
            <Text>Nome: {user?.name}</Text>
            <Text>Email: {user?.email}</Text>
            <Button 
                mt={4}
                colorScheme='red' 
                onClick={logout}
            >
                Sair
            </Button>
        </Box>
    )
}
