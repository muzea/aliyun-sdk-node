export interface SetRetcodeShareStatusRequest {
    /**
     * 应用ID。
     * 在**ARMS控制台**的**前端监控** > **前端列表**页面单击目标应用名称。此时浏览器地址栏中的URL即包含前端应用的pid，格式为pid=xxx。由于浏览器进行了编码，应用需要对xxx%40xxx格式的pid稍作修改。例如，如果URL中包含的pid为eb4zdose6v%409781be0f44d****，则需要将%40替换为@，即：eb4zdose6v@9781be0f44d****。
     * @example `atc889zkcf@d8deedfa9bf****`
     */
    "Pid"?: string;
    /**
     * 设置前端监控站点的免登录分享开关的状态。取值：
     * - `true`：开启。
     * - `false`：关闭。
     * @example `true`
     */
    "Status": boolean;
    /**
     * 前端监控应用名称。
     * @example `test-app`
     */
    "AppName"?: string;
}
