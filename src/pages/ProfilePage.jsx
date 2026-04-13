import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import {
  User,
  Mail,
  Phone,
  Lock,
  CheckCircle,
  AlertCircle,
  Save,
  LogOut,
} from 'lucide-react'

const ProfilePage = () => {
  const { user, logout, updateProfile } = useAuth()

  const [profileForm, setProfileForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  })

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const [profileSuccess, setProfileSuccess] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [profileErrors, setProfileErrors] = useState({})
  const [passwordErrors, setPasswordErrors] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  const handleProfileChange = (field, value) => {
    setProfileForm((prev) => ({ ...prev, [field]: value }))
    if (profileErrors[field]) {
      setProfileErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const handlePasswordChange = (field, value) => {
    setPasswordForm((prev) => ({ ...prev, [field]: value }))
    if (passwordErrors[field]) {
      setPasswordErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validateProfile = () => {
    const errors = {}
    if (!profileForm.name.trim()) errors.name = 'Укажите имя'
    if (!profileForm.email.trim()) errors.email = 'Укажите email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profileForm.email))
      errors.email = 'Некорректный email'
    setProfileErrors(errors)
    return Object.keys(errors).length === 0
  }

  const validatePassword = () => {
    const errors = {}
    if (!passwordForm.currentPassword) errors.currentPassword = 'Укажите текущий пароль'
    if (!passwordForm.newPassword) errors.newPassword = 'Укажите новый пароль'
    else if (passwordForm.newPassword.length < 6)
      errors.newPassword = 'Минимум 6 символов'
    if (passwordForm.newPassword !== passwordForm.confirmPassword)
      errors.confirmPassword = 'Пароли не совпадают'
    setPasswordErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleProfileSubmit = async (e) => {
    e.preventDefault()
    if (!validateProfile()) return

    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    updateProfile(profileForm)
    setIsSaving(false)
    setProfileSuccess(true)
    setTimeout(() => setProfileSuccess(false), 3000)
  }

  const handlePasswordSubmit = async (e) => {
    e.preventDefault()
    if (!validatePassword()) return

    setIsSaving(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsSaving(false)
    setPasswordSuccess(true)
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' })
    setTimeout(() => setPasswordSuccess(false), 3000)
  }

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <Helmet>
        <title>Профиль — Личный кабинет</title>
        <meta name="description" content="Настройки профиля и аккаунта" />
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20">
        <Container>
          <h1 className="text-2xl md:text-3xl font-bold text-text mb-8">Профиль</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Боковая панель */}
            <div className="lg:col-span-1">
              <div className="p-6 rounded-xl bg-surface border border-border-light">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <User size={28} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">{user?.name}</div>
                    <div className="text-sm text-text-secondary">{user?.email}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-error hover:bg-error/5 transition-colors"
                  >
                    <LogOut size={18} />
                    <span className="text-sm font-medium">Выйти из аккаунта</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Основной контент */}
            <div className="lg:col-span-2 space-y-8">
              {/* Редактирование профиля */}
              <div className="p-6 rounded-xl bg-surface border border-border-light">
                <h2 className="text-lg font-semibold text-text mb-6">Редактирование профиля</h2>

                {profileSuccess && (
                  <div className="flex items-center gap-3 p-4 mb-6 rounded-lg bg-emerald-50 border border-emerald-100">
                    <CheckCircle size={20} className="text-emerald-600 shrink-0" />
                    <span className="text-sm text-emerald-700">
                      Профиль успешно обновлён
                    </span>
                  </div>
                )}

                <form onSubmit={handleProfileSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Имя <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      value={profileForm.name}
                      onChange={(e) => handleProfileChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border bg-background-alt transition-colors ${
                        profileErrors.name
                          ? 'border-error focus:border-error'
                          : 'border-border-light focus:border-accent'
                      } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                      placeholder="Ваше имя"
                    />
                    {profileErrors.name && (
                      <div className="flex items-center gap-2 text-error text-sm mt-1">
                        <AlertCircle size={14} />
                        {profileErrors.name}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Email <span className="text-error">*</span>
                    </label>
                    <input
                      type="email"
                      value={profileForm.email}
                      onChange={(e) => handleProfileChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border bg-background-alt transition-colors ${
                        profileErrors.email
                          ? 'border-error focus:border-error'
                          : 'border-border-light focus:border-accent'
                      } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                      placeholder="mail@example.com"
                    />
                    {profileErrors.email && (
                      <div className="flex items-center gap-2 text-error text-sm mt-1">
                        <AlertCircle size={14} />
                        {profileErrors.email}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">Телефон</label>
                    <input
                      type="tel"
                      value={profileForm.phone}
                      onChange={(e) => handleProfileChange('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border-light bg-background-alt focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button type="submit" variant="primary" size="md" loading={isSaving}>
                      <Save size={18} />
                      Сохранить изменения
                    </Button>
                  </div>
                </form>
              </div>

              {/* Смена пароля */}
              <div className="p-6 rounded-xl bg-surface border border-border-light">
                <h2 className="text-lg font-semibold text-text mb-6">Смена пароля</h2>

                {passwordSuccess && (
                  <div className="flex items-center gap-3 p-4 mb-6 rounded-lg bg-emerald-50 border border-emerald-100">
                    <CheckCircle size={20} className="text-emerald-600 shrink-0" />
                    <span className="text-sm text-emerald-700">
                      Пароль успешно изменён
                    </span>
                  </div>
                )}

                <form onSubmit={handlePasswordSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Текущий пароль <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <Lock
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                      />
                      <input
                        type="password"
                        value={passwordForm.currentPassword}
                        onChange={(e) => handlePasswordChange('currentPassword', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-background-alt transition-colors ${
                          passwordErrors.currentPassword
                            ? 'border-error focus:border-error'
                            : 'border-border-light focus:border-accent'
                        } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                        placeholder="Введите текущий пароль"
                      />
                    </div>
                    {passwordErrors.currentPassword && (
                      <div className="flex items-center gap-2 text-error text-sm mt-1">
                        <AlertCircle size={14} />
                        {passwordErrors.currentPassword}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Новый пароль <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <Lock
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                      />
                      <input
                        type="password"
                        value={passwordForm.newPassword}
                        onChange={(e) => handlePasswordChange('newPassword', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-background-alt transition-colors ${
                          passwordErrors.newPassword
                            ? 'border-error focus:border-error'
                            : 'border-border-light focus:border-accent'
                        } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                        placeholder="Минимум 6 символов"
                      />
                    </div>
                    {passwordErrors.newPassword && (
                      <div className="flex items-center gap-2 text-error text-sm mt-1">
                        <AlertCircle size={14} />
                        {passwordErrors.newPassword}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Подтвердите пароль <span className="text-error">*</span>
                    </label>
                    <div className="relative">
                      <Lock
                        size={18}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                      />
                      <input
                        type="password"
                        value={passwordForm.confirmPassword}
                        onChange={(e) => handlePasswordChange('confirmPassword', e.target.value)}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border bg-background-alt transition-colors ${
                          passwordErrors.confirmPassword
                            ? 'border-error focus:border-error'
                            : 'border-border-light focus:border-accent'
                        } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                        placeholder="Повторите новый пароль"
                      />
                    </div>
                    {passwordErrors.confirmPassword && (
                      <div className="flex items-center gap-2 text-error text-sm mt-1">
                        <AlertCircle size={14} />
                        {passwordErrors.confirmPassword}
                      </div>
                    )}
                  </div>

                  <div className="flex justify-end pt-2">
                    <Button type="submit" variant="primary" size="md" loading={isSaving}>
                      <Lock size={18} />
                      Изменить пароль
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ProfilePage
