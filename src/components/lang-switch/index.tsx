import { useTranslation } from 'react-i18next'

import './style.css'

function LangSwitch() {
  const { i18n } = useTranslation()

  const handleOnClick = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  return (
    <button
      type="button"
      onClick={handleOnClick}
    >
      {i18n.language === 'en' ? 'En' : 'Es'}
    </button>
  )
}

export default LangSwitch
