# Talk to Figma MCP (Cursor)

Проект уже содержит сервер MCP в [`.cursor/mcp.json`](../.cursor/mcp.json).

## Что нужно на машине

- **Node.js + npm** (для `npx`) — см. [nodejs.org](https://nodejs.org/)
- Альтернатива как у авторов пакета: [Bun](https://bun.sh/), тогда в Cursor можно заменить блок на:

```json
"TalkToFigma": {
  "command": "bunx",
  "args": ["cursor-talk-to-figma-mcp@latest"]
}
```

## Включение в Cursor

1. Перезапустите Cursor (или **Cursor Settings → MCP → Refresh**), чтобы подхватился `.cursor/mcp.json`.
2. Убедитесь, что сервер **TalkToFigma** в списке MCP включён и без ошибок в логах.

## Плагин в Figma

1. Установите плагин из комьюнити:  
   [Cursor Talk to Figma MCP Plugin](https://www.figma.com/community/plugin/1485687494525374295/cursor-talk-to-figma-mcp-plugin)
2. Откройте файл в Figma → **Plugins** → запустите плагин → подключитесь к каналу (например `default` или свой).
3. В чате Cursor используйте инструмент **`join_channel`** с **тем же** именем канала, затем инструменты вроде `get_selection`, `read_my_design`.

## Полный поток (по замыслу авторов пакета)

Часто нужен **WebSocket** между плагином и MCP. Если инструменты не видят файл:

- см. [официальный README пакета](https://www.npmjs.com/package/cursor-talk-to-figma-mcp) (раздел WebSocket / `bun socket` для продвинутого сценария из исходников репозитория);
- документация Figma: [Cursor and Figma: Set up the MCP server](https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server).

## Безопасность

Не публикуйте токены Figma в репозиторий. Локальный `.cursor/mcp.json` можно коммитить — в примере только вызов `npx`.
