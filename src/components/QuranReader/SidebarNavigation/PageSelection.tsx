import useTranslation from 'next-translate/useTranslation';

import ScrollableSelection from './ScrollableSelection';

import { getPageNavigationUrl } from 'src/utils/navigation';
import { getPageIdsByMushaf } from 'src/utils/page';

const PageSelection = () => {
  const { t } = useTranslation('common');
  const pageIds = getPageIdsByMushaf();

  return (
    <ScrollableSelection
      items={pageIds}
      getHref={getPageNavigationUrl}
      searchPlaceholder={t('sidebar.search-page')}
      renderItem={(item) => `${t('page')} ${item}`}
    />
  );
};

export default PageSelection;