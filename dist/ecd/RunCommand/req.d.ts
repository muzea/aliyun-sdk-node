export interface RunCommandRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 运维脚本的语言类型。取值范围：
     * - RunBatScript
     * - RunPowerShellScript
     * @example `RunPowerShellScript`
     */
    "Type": string;
    /**
     * 脚本的明文内容或者Base64编码后的内容。
     * 脚本内容Base64编码后不能超过16 KB。
     * > 若为Base64编码后的脚本内容，则参数ContentEncoding必须配置为Base64。
     * @example `ipconfig`
     */
    "CommandContent": string;
    /**
     * 执行脚本的超时时间，单位为秒。默认值：300。
     * 当因为进程原因、缺失模块、缺失云助手客户端等原因无法运行脚本时，会出现超时现象。超时后，会强制终止脚本进程。
     * @example `3600`
     */
    "Timeout"?: number;
    /**
     * 脚本内容的编码方式。取值范围：
     * - PlainText：不编码，采用明文传输。
     * - Base64：Base64编码。
     * 默认值：PlainText。乱填或错填时，该取值会当作PlainText处理。
     * @example `Base64`
     */
    "ContentEncoding"?: string;
    /**
     * 云桌面ID列表。N的取值范围：1~50。
     * 如果指定了多台云桌面，只要有一台云桌面可以成功执行脚本，该API就能调用成功。当指定的多台云桌面均无法执行脚本时，您需要重新设置该参数。
     */
    "DesktopId": string[];
    /**
     * 终端用户的ID，若此参数不为空，则会以终端用户的权限执行命令。注：该用户需要在云电脑上存在会话记录（云电脑开机后有过登录及连接行为，且连接时未被其他用户抢占），且Linux云电脑不支持该参数。
     * @example `User1`
     */
    "EndUserId"?: string;
}
