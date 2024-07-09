export interface GetWebTerminalResponse {
    /**
     * 此次调用的请求ID，用于诊断和答疑。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 进入容器的链接。链接为WebSocket URL。用户需构建WebSocket客户端。
     * 客户端中关于WebSocket的通信格式可参考以下代码：
     *   ```
     *   ws = new WebSocket(
     *       `wss://xxxxx`,
     *     );
     *     ws.onopen = function open() {
     *       console.warn('connected');
     *       term.write('\r');
     *     };
     *     ws.onclose = function close() {
     *       console.warn('disconnected');
     *       term.write('Connection closed');
     *     };
     *     // 收到后端返回
     *     ws.onmessage = function incoming(event) {
     *       const msg = JSON.parse(event.data);
     *       console.warn(msg);
     *       if (msg.operation === 'stdout') {
     *         term.write(msg.data);
     *       } else {
     *         console.warn('invalid msg operation: ' + msg);
     *       }
     *     };
     *     // 控制台输入
     *     term.onData(data => {
     *       const msg = { operation: 'stdin', data: data };
     *       ws.send(JSON.stringify(msg));
     *     });
     *     term.onResize(size => {
     *       const msg = { operation: 'resize', cols: size.cols, rows: size.rows };
     *       setTimeout(() => ws.send(JSON.stringify(msg)), 15000);
     *     });
     *     fitAddon.fit();
     *   };
     * ```
     * @example `wss://*****`
     */
    WebTerminalUrl: string;
}
