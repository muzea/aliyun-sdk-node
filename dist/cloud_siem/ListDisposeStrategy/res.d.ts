export interface ListDisposeStrategyResponse {
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 分页记录。
         */
        PageInfo: {
            /**
             * 列表当前页号。
             * @example `1`
             */
            CurrentPage: number;
            /**
             * 每页返回记录数。
             * @example `10`
             */
            PageSize: number;
            /**
             * 记录总数。
             * @example `100`
             */
            TotalCount: number;
        };
        /**
         * 详细数据。
         */
        ResponseData: {
            /**
             * 策略ID。
             * @example `123`
             */
            Id: number;
            /**
             * 创建时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2021-01-06 16:37:29`
             */
            GmtModified: string;
            /**
             * 策略关联SIEM主账号ID。
             * @example `127608589417****`
             */
            Aliuid: number;
            /**
             * 配置策略阿里账号ID。
             * @example `176555323***`
             */
            SubAliuid: number;
            /**
             * 事件名称。
             * @example `Multiple type of alerts, including Miner Network, Command line download and run malicious files, Backdoor Process, etc`
             */
            IncidentName: string;
            /**
             * 处置作用域。
             * @example `[{ aliUid: 1766185894104675 }]`
             */
            Scope: any[];
            /**
             * 事件全局唯一UUID。
             * @example `85ea4241-798f-4684-a876-65d4f0c3****`
             */
            IncidentUuid: string;
            /**
             * 告警UUID。
             * @example `sas_71e24437d2797ce8fc59692905a4****`
             */
            AlertUuid: string;
            /**
             * SOAR处置策略ID。
             * @example `577bbf90-a770-44a7-8154-586aa2d318fa`
             */
            SophonTaskId: string;
            /**
             * 剧本唯一标识名称。
             * @example `WafBlockIP`
             */
            PlaybookName: string;
            /**
             * 剧本UUID。
             * @example `system_aliyun_clb_process_book`
             */
            PlaybookUuid: string;
            /**
             * 剧本类型。取值：
             * - system：手动处置
             * - custom：事件触发剧本
             * - custom_alert：告警触发剧本
             * - soar-manual：手动运行剧本
             * - soar-mdr：MDR运行剧本
             * @example `system`
             */
            PlaybookType: string;
            /**
             * 实体ID。
             * @example `123456789`
             */
            EntityId: number;
            /**
             * 实体详情，json数组格式。
             * @example `[{"ip":"1.1.1.1"}]`
             */
            Entity: any[];
            /**
             * 实体类型。取值：
             * - ip：ip
             * - process：进程
             * - file：文件
             * @example `ip`
             */
            EntityType: string;
            /**
             * 触发剧本参数，json格式。
             * @example `{
                  "file": {
                        "op_code": "2",
                        "file_path": "/root/alert0913/a886.jsp",
                        "entity_type": "file",
                        "entity_name": "a886.jsp",
                        "file_name": "a886.jsp",
                        "file_owner": "USER:,GROUP:",
                        "hash_value": "5def10c9a4287d0920d86b42420b20b0",
                        "op_level": "2",
                        "entity_id": "/root/alert0913/a886.jsp",
                        "host_uuid": {
                              "entity_type": "host",
                              "entity_name": "N/A",
                              "is_comprised": "1",
                              "os_type": "linux",
                              "entity_id": "5f58ef67-8803-4314-8d67-c87dc92b****",
                              "host_uuid": "5f58ef67-8803-4314-8d67-c87dc92b****",
                              "host_name": "N/A"
                        },
                        "malware_type": "${aliyun.siem.sas.alert_tag.webshell}"
                  },
                  "_sys_siem": {
                        "cloudCode": "aliyun",
                        "alertId": "89416745494****"
                  },
                  "scope": [
                        {
                              "aliUid": 1766185894104****
                        }
                  ]
            }`
             */
            TaskParam: string;
            /**
             * 任务的失败摘要信息。
             * @example `DisposalEntity failed which description is Aegis Quarantine File , return_info failed which description is Check Aegis Process Result , [ERROR DETAIL] *******.php:file not found`
             */
            ErrorMessage: string;
            /**
             * 任务的结束时间。
             * @example `2021-08-10 21:34:07`
             */
            FinishTime: string;
            /**
             * 策略状态。取值：
             * - 0：失效
             * - 1：有效
             * @example `0`
             */
            EffectiveStatus: number;
            /**
             * 剧本调用状态。取值：
             * - 200：成功
             * - 10：删除
             * - 5：失败
             * - 0：初始状态
             * @example `10`
             */
            Status: number;
        }[];
    };
}
