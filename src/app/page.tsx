import SearchInput from './components/SearchInput'
import ChatResult from './components/ChatResult'

export default function Page() {
  return (
    <main style={{ padding: 20 }}>
      <h1>検索（チャット風メイン画面）</h1>
      <SearchInput />
      <ChatResult messages={["ようこそ。検索ワークスペースです。"]} />
    </main>
  )
}
