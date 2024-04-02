// Do not edit this file manually
import { parseBlockCredentials, parseBlockSchema } from '@typebot.io/forge'
import { openRouterBlock } from '.'

export const openRouterBlockSchema = parseBlockSchema(openRouterBlock)
export const openRouterCredentialsSchema =
  parseBlockCredentials(openRouterBlock)
