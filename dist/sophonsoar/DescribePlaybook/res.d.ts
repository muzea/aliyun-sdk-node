export interface DescribePlaybookResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2989BC59-E9F0-5C83-B453-B368857649C8`
     */
    RequestId: string;
    /**
     * 剧本的配置信息。
     */
    Playbook: {
        /**
         * 剧本的创建时间，格式：13位的时间戳。
         * @example `1665288858000`
         */
        GmtCreate: string;
        /**
         * 剧本的修改时间，格式：13位的时间戳。
         * @example `1677482519000`
         */
        GmtModified: string;
        /**
         * 剧本UUID。
         * @example `8db257d3-e2b2-44fd-b2cc-xxxxx`
         */
        PlaybookUuid: string;
        /**
         * 剧本的XML配置。
         * @example `<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>`
         */
        Taskflow: string;
        /**
         * 剧本的配置格式。
         * - **xml**：XML格式。
         * - **x6**：JSON格式。
         * @example `xml`
         */
        TaskflowType: string;
        /**
         * 创建剧本的阿里云账户ID。
         * @example `124xxxxx3435`
         */
        Creator: string;
        /**
         * 剧本的类型，取值：
         * - **preset**：预定义剧本。
         * - **user**：自定义剧本。
         * @example `preset`
         */
        OwnType: string;
        /**
         * 剧本成功运行次数。
         * @example `100`
         */
        SuccessExeNum: number;
        /**
         * 剧本失败运行次数。
         * @example `1`
         */
        FailExeNum: number;
        /**
         * 剧本的最后运行时间，格式：13位的时间戳。
         * @example `1665288858000`
         */
        LastExeTime: number;
        /**
         * 修改剧本的阿里云账户ID。
         * @example `124xxxxx3435`
         */
        Modifier: string;
        /**
         * 剧本的展示名称。
         * @example `demo_test`
         */
        DisplayName: string;
        /**
         * 剧本的入参配置，为JSONArray格式。
         * >参考[DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~)接口的格式说明。
         * @example `[
            {
                "typeName": "String",
                "dataClass": "normal",
                "dataType": "String",
                "description": "period",
                "example": "",
                "name": "period",
                "required": false
            }
        ]`
         */
        InputParams: string;
        /**
         * 剧本的描述信息。
         * @example `demo playbook`
         */
        Description: string;
        /**
         * 剧本的启停标记，取值：
         * - **0**：表示剧本已停止
         * - **1**：表示剧本已启用
         * @example `0`
         */
        OnlineActive: boolean;
        /**
         * 剧本最新发布版本的MD5值。
         * @example `asdfsdfe232-e2b2-44fd-b2cc-xxxxx`
         */
        OnlineReleaseTaskflowMd5: string;
    };
}
