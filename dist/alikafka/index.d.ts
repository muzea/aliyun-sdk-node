import { CreateConsumerGroupRequest } from "./CreateConsumerGroup/req";
import { CreateConsumerGroupResponse } from "./CreateConsumerGroup/res";
import { GetConsumerProgressRequest } from "./GetConsumerProgress/req";
import { GetConsumerProgressResponse } from "./GetConsumerProgress/res";
import { CreateTopicRequest } from "./CreateTopic/req";
import { CreateTopicResponse } from "./CreateTopic/res";
import { GetInstanceListRequest } from "./GetInstanceList/req";
import { GetInstanceListResponse } from "./GetInstanceList/res";
import { GetTopicStatusRequest } from "./GetTopicStatus/req";
import { GetTopicStatusResponse } from "./GetTopicStatus/res";
import { GetConsumerListRequest } from "./GetConsumerList/req";
import { GetConsumerListResponse } from "./GetConsumerList/res";
import { GetTopicListRequest } from "./GetTopicList/req";
import { GetTopicListResponse } from "./GetTopicList/res";
import { DeleteTopicRequest } from "./DeleteTopic/req";
import { DeleteTopicResponse } from "./DeleteTopic/res";
import { DeleteConsumerGroupRequest } from "./DeleteConsumerGroup/req";
import { DeleteConsumerGroupResponse } from "./DeleteConsumerGroup/res";
import { GetAllInstanceIdListRequest } from "./GetAllInstanceIdList/req";
import { GetAllInstanceIdListResponse } from "./GetAllInstanceIdList/res";

interface ALIKAFKA {
    /**
    * 调用 CreateConsumerGroup 创建 Consumer Group。
    */ CreateConsumerGroup(query: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse>;
    /**
    * 调用 GetConsumerProgress 查询 Consumer Group 的消费状态。
    */ GetConsumerProgress(query: GetConsumerProgressRequest): Promise<GetConsumerProgressResponse>;
    /**
    * 调用 CreateTopic 创建 Topic。
    */ CreateTopic(query: CreateTopicRequest): Promise<CreateTopicResponse>;
    /**
    * 调用 GetInstanceList 获取您在某地域下所购买的实例的信息。
    */ GetInstanceList(query: GetInstanceListRequest): Promise<GetInstanceListResponse>;
    /**
    * 调用 GetTopicStatus 获取 Topic 的消息收发数据。
    */ GetTopicStatus(query: GetTopicStatusRequest): Promise<GetTopicStatusResponse>;
    /**
    * 调用 GetConsumerList 获取 Consumer Group 列表。
    */ GetConsumerList(query: GetConsumerListRequest): Promise<GetConsumerListResponse>;
    /**
    * 调用 GetTopicList 获取 Topic 的列表。
    */ GetTopicList(query: GetTopicListRequest): Promise<GetTopicListResponse>;
    /**
    * 调用 DeleteTopic 删除 Topic。
    */ DeleteTopic(query: DeleteTopicRequest): Promise<DeleteTopicResponse>;
    /**
    * 调用 DeleteConsumerGroup 删除 ConsumerGroup。
    */ DeleteConsumerGroup(query: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse>;
    GetAllInstanceIdList(query: GetAllInstanceIdListRequest): Promise<GetAllInstanceIdListResponse>;
}
export default ALIKAFKA;
