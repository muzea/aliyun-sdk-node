interface ReceiveNotifyRequest {
    "RegionId"?: string;
    /**
    * 该条任务请求ID。
    * @example `xxx`
    */ "TraceId": string;
    /**
    * aliUID。
    * @example `xxx`
    */ "BizId": string;
    /**
    * 事件类型，包括：**join**、**leave**、**publish**、**unpublish**、**message**。
    * @example `join`
    */ "Event": string;
    /**
    * 透明消息类型。
    * @example `xxx`
    */ "ContentType": string;
    /**
    * 透明消息。
    * @example `xxx`
    */ "Content": string;
    "OwnerId"?: number;
}
export { ReceiveNotifyRequest };