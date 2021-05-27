---
title: Coding Challenges
date: 2021-01-02T01:41:01.686Z
description: In rare occasions, there are jobs that attempt to simulate what
  you'll do day to day, distilled into a few hours in an interview; and in every
  case I've heard they're unrealistic and ablest -- even with attempts to
  accommodate for disabilities.
featuredpost: true
featuredimage: /content/assets/288578cb-4d22-4c32-bb6e-6b0a27a28db9_kevin-ku-w7zyugynprq-unsplash.jpg
thumbnail: ../assets/288578cb-4d22-4c32-bb6e-6b0a27a28db9_kevin-ku-w7zyugynprq-unsplash.jpg
tags:
  - test
  - coding
  - interviews
---
It isn't productive to just lament that the industry wasn't made for me, thankfully I've built a great career for myself, but occasionally I enter the fray. Here's a list of my most notable exercises: 

Check out my [reading list](https://glittertech.dev/2021-01-01-2021-sr-se-reading-list/) to see what I've been doing to level up in my full stack engineer skills.

\------------------------------------------

```python
# Python exercise
from datetime import datetime, timedelta, date

"""
Given busy slots as a data-set in a person's outlook calendar
(eg: {(1000, 1200), (1415, 1530),...}) and the time required for a meeting
(eg: 45 mins) write a method to find an open available slot for scheduling a meeting.
"""

# given a dictionary of values
# Q. what is the object type of the data-set
# A. dictionary
# make the dictionary a list so we can do more things with it
# if given only the start time, we assume 45 meeting
event_list = {
    (1000, 1200),
    (1415, 1530),
    (1200),

}
BOD = 900
EOD = 1700
meeting_time = 45


def add_cal_events(event_list, meeting_time):
    """
    create calendar events from given dictionary
    :param event_list:
    :return: list of calendar events
    """
    events = list(event_list)
    for index, event in enumerate(events):
        if type(event) is not tuple:
            events[index] = (event, event + meeting_time)
    return events, meeting_time


def find_open_slots(start, end, events):
    eventlist, meetingtime = events
    hours_in_day = range(start, end, meetingtime)
    available_slots = []
    for slot in hours_in_day:
        available = True
        for event in eventlist:
            if slot > event[0] and (slot + meetingtime) < event[1]:
                print(slot, event, "overlap in schedule")
                available = False
        if available:
            available_slots.append(slot)
    print(hours_in_day)
    print(available_slots)
    return available_slots


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    find_open_slots(BOD, EOD, add_cal_events(event_list, meeting_time))
```



`Q. Systems Architecture Interview: "Create a Logger"`

A. 

System Design : How to design a distributed logging? -  <https://www.youtube.com/watch?v=JaCA_pVS_1Y>

Scalable and Reliable Logging at Pinterest (DataEngConf SF16) - <https://www.youtube.com/watch?v=DphnpWVYeG8>

Part 1: Building a Centralized Logging Application - <https://hackernoon.com/part-1-building-a-centralized-logging-application-5a537033da0a>

`Q. Live Coding Python : Create an anagram checker`

`Q. Live Coding JavaScript : Look at this data tree representing parents and children. Please create a function that returns all of the childlessPerson (s) and singleParent (s)`

\------------------------------------------

I hate coding challenges. I'm morally opposed to being tested on things that don't directly translate to practical day to day skills. There is no fool proof way to vet a candidate to make sure they're able to perform the first day on the job -- nor should there be. You're investing in the capabilities of a \*human\* not a bot that churns out code to your feature specifications. You're hiring them for their experience and aptitude. 

What ends up happening is you're rejecting great candidates who don't have time to practice coding challenges in the same fashion one would study for the GRE, SAT or another standardized test. Hiring managers have no idea what they're doing and it shows.

\*sigh\* while I'm coordinating lining up every Engineering HR department to do a cartoonish row of slaps all the way down the line, I practice some coding exercises and try not to take it personally that the industry was not made for me.