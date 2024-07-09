export interface DeleteCommandRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询轻量应用服务器的可用地域。
     * @example `cn-hangzhou	`
     */
    "RegionId": string;
    /**
     * 命令ID。您可以通过接口[DescribeCommands](~~64843~~)查询所有可用的CommandId。
     * @example `c-sh02yh0932w****`
     */
    "CommandId": string;
}
