export interface GetConnectionTicketResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 任务状态。
     * @example `FINISHED`
     */
    TaskStatus: string;
    /**
     * 用于连接用户实例的Ticket，使用时需要先将其内容执行base64的解码，并保存为xxx.ica文件，然后打开这个文件。Python代码示例：
     * ```
     * import base64
     * response = {
     *     "Ticket": "W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********",
     *     "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
     * }
     * f = open ('xxx.ica', 'w')
     * out = base64.b64decode(response['Ticket'])
     * f.write(out)
     * f.close()
     * ```
     * @example `W0VuY29kaW5nXQ0KSW5wdXRFbmNvZGluZz1V********`
     */
    Ticket: string;
    /**
     * 云电脑连接任务ID。
     * @example `2afbad19-778a-4fc5-9674-1f19c638****`
     */
    TaskId: string;
}
