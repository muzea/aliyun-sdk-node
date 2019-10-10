import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { CreateTrailRequest } from "./CreateTrail/req";
import { CreateTrailResponse } from "./CreateTrail/res";
import { DeleteTrailRequest } from "./DeleteTrail/req";
import { DeleteTrailResponse } from "./DeleteTrail/res";
import { DescribeTrailsRequest } from "./DescribeTrails/req";
import { DescribeTrailsResponse } from "./DescribeTrails/res";
import { GetTrailStatusRequest } from "./GetTrailStatus/req";
import { GetTrailStatusResponse } from "./GetTrailStatus/res";
import { LookupEventsRequest } from "./LookupEvents/req";
import { LookupEventsResponse } from "./LookupEvents/res";
import { StartLoggingRequest } from "./StartLogging/req";
import { StartLoggingResponse } from "./StartLogging/res";
import { StopLoggingRequest } from "./StopLogging/req";
import { StopLoggingResponse } from "./StopLogging/res";
import { UpdateTrailRequest } from "./UpdateTrail/req";
import { UpdateTrailResponse } from "./UpdateTrail/res";

interface ACTIONTRAIL {
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    CreateTrail(query: CreateTrailRequest): Promise<CreateTrailResponse>;
    DeleteTrail(query: DeleteTrailRequest): Promise<DeleteTrailResponse>;
    DescribeTrails(query: DescribeTrailsRequest): Promise<DescribeTrailsResponse>;
    GetTrailStatus(query: GetTrailStatusRequest): Promise<GetTrailStatusResponse>;
    LookupEvents(query: LookupEventsRequest): Promise<LookupEventsResponse>;
    StartLogging(query: StartLoggingRequest): Promise<StartLoggingResponse>;
    StopLogging(query: StopLoggingRequest): Promise<StopLoggingResponse>;
    UpdateTrail(query: UpdateTrailRequest): Promise<UpdateTrailResponse>;
}
export default ACTIONTRAIL;
