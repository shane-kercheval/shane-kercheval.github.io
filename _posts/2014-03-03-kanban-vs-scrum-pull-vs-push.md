---
title:  "Kanban vs. Scrum - Pull vs. Push"
date:   2014-03-03 08:25:31+0000
categories: lean execution
excerpt: What makes a particular software development methodology a push or pull system is simply how the development team handles the inventory/scheduling of stories.
keywords: agile, kanban, scrum
thumbnail: /img/blog/KanbanBoard.png
thumbnail_width: 701
thumbnail_height: 422
---

Scrum seems to be the go-to flavor of [agile software development](http://en.wikipedia.org/wiki/Agile_software_development), but there has been a lot of talk about Kanban lately. So what are the key differences between the two methodologies, and why does it matter? I'll attempt to answer those questions, not in terms of their exact implementations but, rather, in terms of the characteristics of pull and push systems and the implications on both flavors of agile development.

![KanbanBoard]({{ site.url }}/img/blog/KanbanBoard.png)

[Agile](http://en.wikipedia.org/wiki/Agile_software_development) is a software development methodology that, at its core, is a continuous development/delivery system which welcomes (and expects) change, collaboration, working software (over comprehensive documentation), among other things. (See the [Agile Manifesto](http://agilemanifesto.org/) and [corresponding principles](http://agilemanifesto.org/principles.html))

[Scrum](https://www.scrum.org/) is a specific implementation (or flavor) of agile development. It is probably one of the most well-known and widely used flavors, and has a large degree of success among teams who adopt it. The key point about Scrum, and also a fundamental assumption of this post, is that Scrum is a [push system](http://en.wikipedia.org/wiki/Push%E2%80%93pull_strategy), as opposed to a [pull system](http://en.wikipedia.org/wiki/Push%E2%80%93pull_strategy). _(Note that this assumption has been disputed with some merit, see "Rebuttal of: Scrum is Pull" section below.)_ There are different ways to describe push vs. pull, but [Wikipedia](http://en.wikipedia.org/wiki/Push%E2%80%93pull_strategy) describes it (in terms of manufacturing and marketing) by stating that "push production is based on forecasted demand and pull production is based on actual or consumed demand" (i.e. actual/consumed demand meaning that the 'consumption' of an item in a pull system triggers the reorder/production of a defined number of replacement items). [Kanban](http://en.wikipedia.org/wiki/Kanban) is probably known best as a manufacturing scheduling and inventory system used by Toyota to enable [lean](http://en.wikipedia.org/wiki/Lean_manufacturing) and [just-in-time (JIT)](http://en.wikipedia.org/wiki/Just_In_Time_(business)) production (i.e. lean/JIT = elimination of waste / continuous improvement, reducing inventory, flexible resources, implementation of the pull system, etc.). The key point about Kanban, in terms of this post, is that it is a [pull system](http://en.wikipedia.org/wiki/Push%E2%80%93pull_strategy), and when applied to software, is a flavor of agile. Kanban is taught in any introductory operations management class in the context manufacturing. What is rarely mentioned is its application to other industries, such as software.


> Kanban is, at its core, a lean/JIT system, and is also a natural implementation of agile because of the many complimentary aspects between lean and agile.*


# Push vs. Pull

In my opinion, the difference between push and pull systems is very important in the context of software development, and has large implications on the how a particular team operates. Therefore, it follows that these different systems may fit certain situations and not others.

## Inventory of Stories

> What makes a particular software development methodology a push or pull system is simply how the development team handles the inventory/scheduling of stories.

The main factor that makes Scrum a push system is the act of sprint planning. Developers "push" stories into the system, i.e. the sprint's queue, based on a _forecast of demand_, which consists of the needs/desires of the business as well as the _estimated_ capacity of the development team (usually expressed in story points or available hours). _Note, not everyone is convinced Scrum is a push system. See "Rebuttal of: Scrum is Pull" section below_. Kanban, on the other hand, theoretically reduces/eliminates the need for sprint planning since there is no queue to push into. Developers "pull" in stories to be worked on based on _actual demand_, which still consists of the needs/desires of the business, but is now based on the _actual_ capacity of team (i.e. when a developer finishes a story, he/she will pull in the next story accordingly). It seems like a subtle difference, so why does it matter?

# Short-Term Estimation

In the context of software development, in a push system (i.e. production is based on forecasted demand) we are pushing items into a queue that has an imposed time limit (e.g. two-three weeks) and, therefore, we must estimate what we can accomplish in that time period. This shouldn't be a significant issue for known and stable situations where we have plenty of knowledge and information. The downside is that new systems can sometimes have many unknowns, which are difficult to assess until you start to dig into the specific implementation. So, while we might have a good idea on how long the entire system will take to implement, the _variance_ of accuracy in the estimation of workload for each story/task, and thus the sprint, is likely to be much greater in the short-term than in the long-term (i.e. the long term evens out the variance). Thus, the question becomes: how much variance exists in the accuracy of our estimates per sprint and, ultimately, does it matter? It does matter if, for example, the variance is great enough that developers are either always making a huge push towards the end of each sprint to accomplish what they 'committed' to (i.e. they underestimated workload), or if they finished the workload early and start to pull in stories (i.e. they overestimated workload). In a pull system, developers would pull in stories as needed (which, again, is what can happen anyway if the overestimated the workload; so why not do this to start with?). At the very least, the push system forces continual overhead into the project by forcing the team to estimate and plan for the next sprint.

> So why are we imposing these estimations on ourselves?

Perhaps there is a reason to define exactly what is going to be done in the next three weeks, but in some situations (maybe most) this may be a waste of time. If we assume, for a moment, that the same amount of work will be done in both push/pull systems (ignoring the overhead previously mentioned), what are the benefits for defining up front what will be completed, as opposed to reporting it at the end?

## Changing Demand

A side effect of push is that once you have "pushed" the stories into the queue (i.e. the sprint), typically, the system is (or is supposed to be) closed and immutable. Obviously this isn't exactly true, as we tend to add stories into the sprint that should be "small" or are "critical" (or at least that's what we tell ourselves). However, we don't take anything out in exchange. Then (for some reason), the team ends up being confused why (and angry because) they are working late at the end of the sprint to finish everything in the queue. Obviously the solution is simple (in theory): if you need to put something into the queue after sprint planning, then take something out. However, for some reason(s) we don't do this, and my guess is that there are psychological reasons based on bad estimating (or the contrasting principle, which may make a "small" story appear smaller than it really is, compared to other stories, or the sprint as a whole (Cialdini, 2009, p. 12)), commitment, pressure from management, etc. For example, Robert Cialdini, a Professor of Psychology at Arizona State University, states that -once we make a choice or take a stand, we will encounter personal and interpersonal pressures to behave consistently with that "commitment" (Cialdini, 2009, p. 52) and that those pressures increase if the commitment is -active, public, effortful, and freely chosen" (Cialdini, 2009, p. 66), which are all present conditions in the commitments we make during sprint planning. Furthermore, he states that -once a legitimate authority has given an order, subordinates stop thinking in the situation and start reacting" (Cialdini, 2009, p. 181). The implication is that if we perceive someone as being more knowledgeable about the system and the "small" story that is being pushed into the queue (i.e. we perceive him/her as being an 'expert', we may not think to question their judgment (unless a continual pattern emerges).

> The question becomes, if we expect continuous change and a high degree of uncertainty, why are we self-imposing, not only a pre-defined definition of exactly what will be completed, but also a two-three week lockdown of change?

This is also related to the concept of lead-time. In manufacturing, lead-time can be considered the difference (delay) in time between when an order is placed and when the execution/manufacturing process begins. Obviously this affects cumulative lead-time which is the total length from order to delivery. (Note these terms are used slightly different among difference sources.) It follows that reducing the lead-time reduces the cumulative lead-time.

> The implication is that, in software, if a push system has a self-imposed two-three block of time where the queue is (theoretically) locked down, you increase the time when a new feature is requested and when development begins (i.e. lead-time), and you now increase the time that the new request can be released (i.e. cumulative lead-time).

This three-week time period may or may not matter. (e.g. What is the company's definition of continuous deployment, and what is the likelihood of product owners asking for new requests that need rapid integration/deployment? This will obviously change for each product/service/organization.) In a pull system, the need for this lockdown (theoretically) disappears since the team is no longer concerned with filling the queue and executing everything inside within a certain time-period. This is neither positive nor negative by itself, but entirely depends on the business model.

## Inventory and Work In Progress Limits

Kanban is the Japanese word for card and, (in the context of manufacturing) "in the pull system, each Kanban corresponds to a standard quantity of production or size of container" (Russell & Taylor, 2011, p. 726) . The card basically is used to control inventory levels; -the only inventory that is maintained is the amount needed to cover usage until the next order can be processed. This concept is the basis for the Kanban system. Kanbans do not make the schedule of production; they maintain the discipline of pull production by authorizing the production and movement of materials" (Russell & Taylor, 2011, p. 727).

> In the context of software development, these inventory level concepts translate to Work in Progress (WIP) limits.

For example, a common problem for development teams is that everyone is concentrating on getting stories completed, and the 'pile' of code-reviews can build up, which stop the items from progressing through the system into the next stage (QA). A WIP limit states that there are only a certain amount of stories that can be in each stage at one time. If the limit is reached, the story must be processed (e.g. code-reviewed) before new stories can be brought into the system. A side effect of this the WIP limit (theoretically), besides a more continuous flow, would be a greater imposed structure on the system and, therefore, less pressure to hit self-imposed deadlines and more concentration on the process (without skipping steps e.g. code reviews). [Alex Salazar's team](http://www.stormpath.com/blog/so-long-scrum-hello-kanban) has testified that this is, indeed, the case. There are other benefits to WIP limits. (I will attempt to paraphrase Eric Ries' comments in his book, The Lean Startup.) Pull techniques (and WIP limits) reduce the batch size of the WIP (i.e. the amount of work that is currently being performed). This is important for several reasons.

> One reason is that smaller batch sizes reduce complexity in the system.

For example, (at one extreme) defining, implementing, and testing one user story at a time is a very simple system. Our intuition tells us that this would be an extremely slow process and, thus, small batches may reduce the total amount of work that can be accomplished. However, the truth is most likely the opposite, because of the overhead of continuous switching between tasks (both at an individual and team level). There have been many studies to confirm the power of small batches over large batches (Ries, 2011, p. 184). This also has an important implication for companies that incorporate validated learning (Eric's term for an essential unit of progress in a 'startup' and the process of validated all of the hypotheses/assumptions that are a part of the strategy/business-plan).

> The use of small batches increases our efficiency because we know a lot sooner (relative to large batches) when we have made invalid hypotheses/assumptions and, therefore, when we must adjust/pivot our strategy.

Obviously the more work that has been completed prior to the pivot, the more code/features may be affected/removed by the need to pivot. Also, by continually validating/invalidating the hypotheses/assumptions of the business-plan, the team/organization can move faster to double down on the features that customers are responding to, and remove the features that are negatively impacting the customer experience (or even the features that customers are indifferent towards).

> Finally, small batches are required for [continuous deployment](http://www.startuplessonslearned.com/2009/06/why-continuous-deployment.html).

For example, Wealthfront, which is a software-based financial advisor/brokerage, has "more than a dozen releases to customers every day in an SEC-regulated environment" (Ries, 2011, p. 191).

# Rebuttals

There are a couple articles (which have good information and make strong arguments) that I was reviewing which seem to disagree with the points I have made. I'll attempt to offer a different perspective on their opinions. Let me say that, before I briefly analyze these posts (the term 'analyze' might be an exaggeration), my intention is not to dismiss the authors' points, nor is it to imply that -I'm right and they are wrong. My intention is to look at different perspectives, which have good merits and seem like they might be popular views, and attempt to offer alternative perspectives.

## Rebuttal of: Scrum is Pull

Michael DePaoli argues in [Kanban vs Scrum Myths and Hype](http://blogs.versionone.com/agile_management/2012/01/06/1-kanban-vs-scrum-myths-hype/) that -_[s]crum does not have work pushed through the system.' It is a pull-based agile development system with work pulled in larger batches (the Sprint Backlog). A Scrum implementation (as well as Kanban) becomes a 'pushed-based' system when the business doesn't respect the current proven capability of its teams to produce value and just continues to push demands for service into the system." I would, respectfully, disagree with this statement because I think the terms push/pull can be a matter of preference when talking about pushing/pulling onto/into a queue/system, and it is not a matter of the business pushing demands into the system. A push and pull system is differentiated by the _schedule of production_ which, in the context of software, is the schedule of implementation (e.g. sprint planning).

> "In a push system, a schedule is prepared in advance" (Russell & Taylor, 2011, p. 726). In a pull system, workers "take only the parts or materials they need and can process immediately" (Russell & Taylor, 2011, p. 726) . So, the debatable assumption is the definition of "immediately"? In my opinion, "immediately" is not in two-three weeks.

In other words (and as I stated previously), push vs. pull is determined by the use of forecasted vs. actual demand, respectively. Thus, in Scrum, the developers are using a forecasting model of demand for their schedule of production (i.e. sprint) by estimating both the capacity and workload for the associated time period (two-three weeks). In other words, they are preparing a schedule in advance (i.e. push system). In Kanban, the actual demand is used during production (i.e. implementation) and developers pull" stories into their "workstations" as they become available.

## Rebuttal of: Kanban is not a software development methodology.

Again, I have read some interesting articles whose authors would most likely argue against most of the points I'm making. There are some very good rebuttals and opinions on this topic, including professionals who believe that Kanban is not actually a software development methodology (and should not be). One example is Charles Bradley, whose blog post on the subject can be found [here](http://scrumcrazy.wordpress.com/2013/02/04/kanban-vs-scrum-kanban-is-not-for-software-development-but-scrum-is/). According to Charles, "scrum is about software development [and] Kanban is about change management". Mr. Bradley's point seems to be that Kanban doesn't fit the software industry because it has traditionally been applied towards assembly lines, and those systems aren't _apples-to-apples_ (my words, not his). It is true there are many differences between assembly lines/manufacturing and software development, but I would suggest that a single system can be applied to multiple industries, even if, on the surface, those industries appear to be drastically different.


> It seems like Kanban, in my opinion, is a scheduling and inventory system at its core. Assembly lines have both scheduling and inventory aspects (obviously), but so does software, right? Inventory = product backlog items (PBIs) & the sprint queue, scheduling = sprint planning, product backlog grooming, etc.

Why can't an inventory and scheduling system be applied to a software development methodology? I see many similarities. In hope of "meeting in the middle" with Mr. Bradley's view, I would suggest that what we are doing (those of us who discuss Kanban software development), is simply taking various lean/Kanban/pull techniques from the manufacturing world, and calling it Kanban because of the origin of the name. I personally don't see a problem with making a distinction between Kanban in manufacturing and Kanban in software, even if some of the concepts of the original manufacturing methodology do not directly apply. However, the result, and what matters, is a useful implementation of software based on lean/pull methodologies.

# Final Thoughts

As with everything else, there are rarely any absolutes or one-size-fits-all answers (the answer tends to be somewhere in the middle) and it is mostly a question of using the right tools for the _specific_ job at hand. The challenge is agreeing what the right tools are! With software (as probably with many other topics), whether it is development methodologies, coding standards, etc., discussions tend to take on almost a 'religious' characteristic, in that people are very passionate, very defensive, too quick to dismiss, and too slow to give ground. My personal challenge to myself is to always take a step back and analyze the problem definition and diagnosis of the situation before I try to prescribe the right strategy. Sometimes that can be very difficult with the things we are passionate about.

# References

Cialdini, R. B. (2009). _Influence: Science and Practice_ (Fifth Edition ed.). Boston: Pearson Education, Inc. Ries, E. (2011). _The Lean Startup._ New York: Crown Business. Russell, R. S., & Taylor, B. W. (2011). _Operations Management_ (7th Edition ed.). Danvers: John Wiley and Sons, Inc.
