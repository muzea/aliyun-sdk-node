export interface GetConnectTicketResponse {
    /**
     * 当前调用的运行状态
     * * false：还未完成。
     * * true：已完成。
     * @example `true`
     */
    TaskFinished: boolean;
    /**
     * 请求 id
     * @example `XXX-XXX`
     */
    RequestId: string;
    /**
     * 用来连接用户实例 Ticket，使用时需要先将其内容做 base64 的 decode，保存为 xxx.ica 文件，然后打开这个文件。python 代码举例：
     * ```
     * import base64
     * response = {
     *     "Ticket": "XXXX",
     *     "RequestId": "XXX-XXX",
     * }
     * f = open ('xxx.ica', 'w')
     * out = base64.b64decode(response['Ticket'])
     * f.write(out)
     * f.close()
     * ```
     * @example `XXXXXXXXX`
     */
    Ticket: string;
    /**
     * 当前调用对应的任务 id。调用方可使用此值，继续调用此 API 来获取运行的结果。
     * @example `t-xxx`
     */
    TaskId: string;
}
