import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactUsPage() {
  const t = useTranslations('Index');
  return (
    <div className='max-w-[90%] md:max-w-[50%]  mx-auto pt-10 md:pt-24 pb-32'>
      <h1 className='pb-10 max-w-xl text-3xl md:text-5xl font-bold text-center mx-auto'>{t('contactUs.title')}</h1>
      <Card className='shadow-sm shadow-gray/50 border-0 pt-10'>
        <CardContent>
          <div className='grid gap-6'>
            <div className='grid gap-3'>
              <Label htmlFor='name'>{t('contactUs.name')}</Label>
              <Input id='name' type='text' placeholder={t('contactUs.namePlaceholder')} />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='telephone'>{t('contactUs.telephone')}</Label>
              <Input id='telephone' type='number' placeholder={t('contactUs.telephonePlaceholder')} />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='email'>{t('contactUs.email')}</Label>
              <Input id='email' type='email' placeholder={t('contactUs.emailPlaceholder')} />
            </div>
            <div className='grid gap-3'>
              <Label htmlFor='message'>{t('contactUs.message')}</Label>
              <Textarea id='message' placeholder={t('contactUs.messagePlaceholder')} rows={5} />
            </div>
            <Button
              type='submit'
              className='w-fit mx-auto bg-secondary text-white px-6 py-3 rounded-md hover:bg-green/90 transition-colors duration-300'
            >
              {t('contactUs.submit')}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
