import React from 'react';

const Trends = ({trends}) => {
    var thisRank = 0;
    const rankedTrends = trends.map(trend => {
        thisRank++;
        return {
            id: trend.id,
            name: trend.name,
            rank: thisRank
        }
    });
    return (
        <div className="trendsSection">
            <div className="sectionTitle">
                <span>Trends</span>
            </div>
            <div className="trendsList">
                {
                    trends.length > 0 ? (
                        rankedTrends.map(trend => (
                            <div className="trend" key={`trend-${trend.id}`}>
                                <span>#{trend.rank} {trend.name}</span>
                            </div>
                        ))
                    ) : (
                        <div></div>
                    )
                }

            </div>
        </div>
    );
}
 
export default Trends;