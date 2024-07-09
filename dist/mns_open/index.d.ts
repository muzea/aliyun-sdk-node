import { ListQueueRequest } from "./ListQueue/req";
import { ListQueueResponse } from "./ListQueue/res";
import { SetTopicAttributesRequest } from "./SetTopicAttributes/req";
import { SetTopicAttributesResponse } from "./SetTopicAttributes/res";
import { ListSubscriptionByTopicRequest } from "./ListSubscriptionByTopic/req";
import { ListSubscriptionByTopicResponse } from "./ListSubscriptionByTopic/res";
import { GetQueueAttributesRequest } from "./GetQueueAttributes/req";
import { GetQueueAttributesResponse } from "./GetQueueAttributes/res";
import { GetSubscriptionAttributesRequest } from "./GetSubscriptionAttributes/req";
import { GetSubscriptionAttributesResponse } from "./GetSubscriptionAttributes/res";
import { CreateTopicRequest } from "./CreateTopic/req";
import { CreateTopicResponse } from "./CreateTopic/res";
import { UnsubscribeRequest } from "./Unsubscribe/req";
import { UnsubscribeResponse } from "./Unsubscribe/res";
import { ListTopicRequest } from "./ListTopic/req";
import { ListTopicResponse } from "./ListTopic/res";
import { SetSubscriptionAttributesRequest } from "./SetSubscriptionAttributes/req";
import { SetSubscriptionAttributesResponse } from "./SetSubscriptionAttributes/res";
import { CreateQueueRequest } from "./CreateQueue/req";
import { CreateQueueResponse } from "./CreateQueue/res";
import { SetQueueAttributesRequest } from "./SetQueueAttributes/req";
import { SetQueueAttributesResponse } from "./SetQueueAttributes/res";
import { GetTopicAttributesRequest } from "./GetTopicAttributes/req";
import { GetTopicAttributesResponse } from "./GetTopicAttributes/res";
import { SubscribeRequest } from "./Subscribe/req";
import { SubscribeResponse } from "./Subscribe/res";
import { DeleteTopicRequest } from "./DeleteTopic/req";
import { DeleteTopicResponse } from "./DeleteTopic/res";
import { DeleteQueueRequest } from "./DeleteQueue/req";
import { DeleteQueueResponse } from "./DeleteQueue/res";

interface MNS_OPEN {
    /**
     * 调用ListQueue接口，列出指定阿里云账号下的所有队列，可分页获取数据。
     */
    ListQueue(query: ListQueueRequest): Promise<ListQueueResponse>;
    /**
     * 调用SetTopicAttributes接口来修改主题的属性。
     */
    SetTopicAttributes(query: SetTopicAttributesRequest): Promise<SetTopicAttributesResponse>;
    /**
     * 调用ListSubscriptionByTopic接口列出某个主题下的Subscription列表，可分页获取数据。
     */
    ListSubscriptionByTopic(query: ListSubscriptionByTopicRequest): Promise<ListSubscriptionByTopicResponse>;
    /**
     * 调用GetQueueAttributes接口获取某个已创建队列的属性。
     */
    GetQueueAttributes(query: GetQueueAttributesRequest): Promise<GetQueueAttributesResponse>;
    /**
     * 调用GetSubscriptionAttributes接口获取Subscription的属性。
     */
    GetSubscriptionAttributes(query: GetSubscriptionAttributesRequest): Promise<GetSubscriptionAttributesResponse>;
    /**
     * 调用CreateTopic接口创建主题。
     */
    CreateTopic(query: CreateTopicRequest): Promise<CreateTopicResponse>;
    /**
     * 调用Unsubscribe接口取消一个已创建的Subscription。
     */
    Unsubscribe(query: UnsubscribeRequest): Promise<UnsubscribeResponse>;
    /**
     * 调用ListTopic接口查询阿里云账号下的主题列表，可分页获取数据。
     */
    ListTopic(query: ListTopicRequest): Promise<ListTopicResponse>;
    /**
     * 调用SetSubscriptionAttributes接口修改Subscription的属性。
     */
    SetSubscriptionAttributes(query: SetSubscriptionAttributesRequest): Promise<SetSubscriptionAttributesResponse>;
    /**
     * 调用CreateQueue接口创建一个新的队列。
     */
    CreateQueue(query: CreateQueueRequest): Promise<CreateQueueResponse>;
    /**
     * 调用SetQueueAttributes接口修改队列属性。
     */
    SetQueueAttributes(query: SetQueueAttributesRequest): Promise<SetQueueAttributesResponse>;
    /**
     * 调用GetTopicAttributes接口获取主题的属性。
     */
    GetTopicAttributes(query: GetTopicAttributesRequest): Promise<GetTopicAttributesResponse>;
    /**
     * 调用Subscribe接口，为主题创建Subscription。
     */
    Subscribe(query: SubscribeRequest): Promise<SubscribeResponse>;
    /**
     * 调用DeleteTopic接口删除主题。
     */
    DeleteTopic(query: DeleteTopicRequest): Promise<DeleteTopicResponse>;
    /**
     * 调用DeleteQueue接口删除已创建的队列。
     */
    DeleteQueue(query: DeleteQueueRequest): Promise<DeleteQueueResponse>;
}
export default MNS_OPEN;
