export interface GetConnectionTicketRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑授权用户的用户名。必须传入云电脑现有的授权用户才能成功生成凭证。
     * @example `alice`
     */
    "EndUserId"?: string;
    /**
     * 云电脑授权用户的密码。
     * @example `Ab123456`
     */
    "Password"?: string;
    /**
     * 云电脑连接任务ID。
     * @example `2afbad19-778a-4fc5-9674-1f19c638****`
     */
    "TaskId"?: string;
    /**
     * 需生成连接凭证的云电脑ID。必须传入该字段才能成功生成凭证。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId"?: string;
    /**
     * 客户端唯一标识。若使用无影客户端，可在客户端登录界面的**关于**对话框中查看该参数。
     * @example `28c80e90-f71e-4c23-93d6-1225329cf949`
     */
    "Uuid"?: string;
    /**
     * 当前参数可以配置自定义用户态应用，当成功获取凭证后，自动执行应用。
     * - appPath：String类型，应用启动文件路径，例如：`"C:\\Program Files (x86)\\000\\000.exe"`，注意路径分隔符要用双斜杠（\\\）。
     * - appParameter：String类型，应用启动参数，例如：`"meetingid 000 meetingname aaa"`，注意参数与参数之间直接用空格。
     * @example `{
          "startApplication": {
                "startApplicationList": [
                      {
                            "sessionName": "",
                            "appList": [
                                  {
                                        "appPath": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
                                        "appParameter": "www.example.com www.example1.com"
                                  }
                            ]
                      }
                ]
          }
    }`
     */
    "CommandContent"?: string;
}
