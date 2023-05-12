import { MongoClient, type MongoClientOptions } from 'mongodb'

const clientSymbol = Symbol('client')

export const MongoHelper = {
  [clientSymbol]: null as MongoClient | null,

  async connect (uri: string, options?: MongoClientOptions): Promise<void> {
    this[clientSymbol] = await MongoClient.connect(uri, options)
  },

  async disconnect (): Promise<void> {
    await this[clientSymbol]?.close()
    this[clientSymbol] = null
  }
}
