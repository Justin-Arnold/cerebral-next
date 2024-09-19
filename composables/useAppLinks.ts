import { useStorage } from "@vueuse/core"
import type { Link } from '../types/Link'

export const useAppLinks = () => {
    const links = useStorage<Link[]>('cerebral-link-items', [])
  
    function addLink(link: Link) {
        links.value.push(link)
    }

    function removeLink(link: Link) {
        links.value =  links.value.filter(item => item === link);
    }

    return {
        links,
        addLink,
        removeLink
    }
}