export interface PublishPlaybookRequest {
    /**
     * 剧本的UUID。
     * >调用[DescribePlaybooks](~~DescribePlaybooks~~)接口可以获取该参数。
     * @example `ac343acc-1a61-4084-9a1c-xxxxxxx`
     */
    "PlaybookUuid": string;
    /**
     * 本次发布版本的描述。
     * @example `This is a waf processing playbook`
     */
    "Description"?: string;
}
