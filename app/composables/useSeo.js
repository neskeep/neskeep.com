/**
 * Composable para gestionar SEO de forma consistente
 * Wrapper sobre useSeoMeta con defaults de Neskeep
 */
export const useSeo = (options = {}) => {
  const defaults = {
    siteName: 'Neskeep',
    siteUrl: 'https://neskeep.com',
    defaultImage: '/og.svg', // TODO: Convertir a og.png (1200x630) para mejor compatibilidad
    twitterHandle: '@neskeep'
  }

  const {
    title,
    description,
    image = defaults.defaultImage,
    url,
    type = 'website',
    author,
    publishedTime,
    modifiedTime
  } = options

  const fullTitle = title ? `${title} - ${defaults.siteName}` : defaults.siteName
  const fullUrl = url ? `${defaults.siteUrl}${url}` : defaults.siteUrl
  const fullImage = image.startsWith('http') ? image : `${defaults.siteUrl}${image}`

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: title || defaults.siteName,
    ogDescription: description,
    ogImage: fullImage,
    ogUrl: fullUrl,
    ogType: type,
    ogSiteName: defaults.siteName,
    twitterCard: 'summary_large_image',
    twitterTitle: title || defaults.siteName,
    twitterDescription: description,
    twitterImage: fullImage,
    twitterSite: defaults.twitterHandle,
    ...(author && { author }),
    ...(publishedTime && { articlePublishedTime: publishedTime }),
    ...(modifiedTime && { articleModifiedTime: modifiedTime })
  })
}
