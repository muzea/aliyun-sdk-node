interface SendUnicastCommandRequest {
    "RegionId"?: string;
    /**
    * 目标节点。
    * @example `0000000000000000`
    */ "DevEui": string;
    /**
    * fPort。
    * @example `0`
    */ "FPort": number;
    /**
    * 要发送的内容。
    * @example `xxx`
    */ "Content": string;
    /**
    * 最大重发次数，默认为**0**。
    * @example `1`
    */ "MaxRetries"?: number;
    /**
    * 是否清空该节点的堆积指令，并下发该指令。默认为**false**。
    * @example `false`
    */ "CleanUp"?: boolean;
    /**
    * 是否是confirmed指令，默认为**false**。
    * @example `false`
    */ "Comfirmed"?: boolean;
}
export { SendUnicastCommandRequest };