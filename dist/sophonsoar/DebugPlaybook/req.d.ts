export interface DebugPlaybookRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `f916b93e-e814-459f-9662-xxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 调试剧本时的输入参数，由用户自定义。
     * @example `{
       "param1":"a",
       "param2":"b"
    }`
     */
    "Record"?: string;
    /**
     * 剧本的xml配置。
     * >调用[DescribePlaybook](~~DescribePlaybook~~)接口可以获取该配置。
     * @example `<?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
    `
     */
    "Taskflow": string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
