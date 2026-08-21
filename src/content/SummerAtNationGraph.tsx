const img = (name: string) =>
  `${import.meta.env.BASE_URL}blog/nationgraph/${name}`;

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className="my-8">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full rounded-lg border border-bone-ash/40"
      />
      {caption && (
        <figcaption className="mt-2 text-center font-mono text-xs text-bone-pencil">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-10 mb-4 font-serif text-2xl font-bold text-bone-ink">
      <span className="accent-mark font-mono text-lg text-latte-mauve">
        ##{" "}
      </span>
      {children}
    </h2>
  );
}

export function SummerAtNationGraph() {
  return (
    <div className="prose-reading space-y-5 text-bone-ink/90">
      <p>
        Most internships hand you a lane. NationGraph handed me a blank page.
        The talent was dense, the room was young, some of the people carrying
        the most responsibility were around my age, and nobody was going to
        tell me exactly what to build. I could tell pretty quickly that an
        interesting challenge lay ahead this summer.
      </p>

      <Figure
        src={img("interns-lunch.jpg")}
        alt="The NationGraph interns walking down the street carrying takeout bags"
        caption="Interns heading for lunch"
      />

      <SectionHeading>What does NationGraph do?</SectionHeading>
      <p>
        NationGraph helps companies sell into the SLED market (State, Local,
        and EDucation government). Underneath that is a genuinely hard problem.
        We sit on a huge corpus of scattered public data, and product
        engineering's job is to build the workflows that turn it into something
        a go-to-market team can act on. Done poorly it's just noise; done well
        it points someone straight at who to talk to and why.
      </p>

      <SectionHeading>What did I work on?</SectionHeading>
      <p>
        Early on, our first big sprint was a full UI overhaul. I helped take
        our component library from 0 to 1 and rebuilt our app pages on top of
        it, a true trial by fire. But the more I worked, the more the real
        challenge came into focus, and it lived above the code: making the
        value of our data obvious and fast to act on. Good UI got us part of
        the way, but users still didn't always know what to do with what we put
        in front of them.
      </p>
      <p>
        So I moved toward it. I jumped on as many customer calls as I could to
        hear the real use cases (shoutout to our AM team), and did a stretch of
        customer feedback triage that fast-tracked my product sense. I started
        forming opinions and, more usefully, carrying them between AM, design,
        sales, and engineering until they turned into something we could
        actually build. Once you can see the product that way, you stop waiting
        for problems to be handed to you and start finding them yourself.
      </p>

      <SectionHeading>Seeing NationGraph evolve</SectionHeading>
      <p>
        A lot changed while I was here, and I got to help push some of it
        along. One early project pulled me deeper into the problem: a small
        feature that suggested what a user should do next. It planted an idea I
        kept coming back to: do the work for me, don't give me homework.
        Chasing that sharpened my product opinions and my instinct for working
        out what someone actually needs before building it.
      </p>
      <p>
        That became the thesis of our second big sprint: go agent-first. If the
        first sprint rebuilt how the app looked, this one rethought what it
        should do for you, and it was the busiest, most multitasked stretch of
        my term. One track was mine end to end: the Signals feed, our main
        user-facing page, where leads get surfaced to a rep. I turned it into a
        proper inbox, and it was more than cosmetic, since I rebuilt it to stay
        fast under heavy data loads.
      </p>

      <Figure
        src={img("signals-before.png")}
        alt="The Signals feed before the revamp"
        caption="The Signals feed before the revamp"
      />
      <Figure
        src={img("signals-after.png")}
        alt="The Signals feed rebuilt as an inbox"
        caption="The Signals feed after, rebuilt as an inbox"
      />

      <p>
        The other track was Compass, our agent. Instead of handing someone a
        screen of data and hoping they know what to do with it, they can just
        ask. A rep can tell it to map the decision-makers across their
        territory, flag which accounts have an active buying signal so they
        know who to call first, and draft a first-touch email for the top few,
        and it goes and does it. No manual hunting, no re-deriving the
        shortlist by hand. I spent a lot of that sprint helping feel out how it
        should work: what the first agent homepage looks like, which
        suggestions to put in front of which users, and when something should
        be a quick action versus a full workflow. A lot of that was sanding,
        but it's the texture that decides whether an agent-first app feels
        obvious or confusing.
      </p>

      <Figure
        src={img("compass-homepage.png")}
        alt="The Compass agent homepage"
        caption="The Compass agent homepage"
      />

      <SectionHeading>Away from the keyboard</SectionHeading>
      <p>
        I can't pretend the rest didn't matter, because a lot of what made this
        term great happened away from the keyboard. The food (insane), and
        mostly the people. I golfed with colleagues, worked through a rotation
        of new restaurants, played a lot of surprisingly competitive pickleball
        with the other interns and our boss, Jason, and beat Alex from our AM
        team in hockey with colleagues watching (he'll dispute this).
      </p>

      <figure className="my-8">
        <div className="grid grid-cols-3 gap-3 [&>img]:w-full [&>img]:aspect-square [&>img]:object-cover [&>img]:rounded-lg [&>img]:border [&>img]:border-bone-ash/40">
          {/* Top row: the food */}
          <img
            src={img("gallery-1.jpg")}
            alt="Takeout box of tacos and sushi"
            loading="lazy"
          />
          <img
            src={img("gallery-2.jpg")}
            alt="Spicy beef bowl next to a page of product notes"
            loading="lazy"
          />
          <img
            src={img("gallery-3.jpg")}
            alt="Salmon and avocado box"
            loading="lazy"
          />
          {/* Bottom row: the people & places */}
          <img
            src={img("gallery-4.jpg")}
            alt="Team selfie on a boat"
            loading="lazy"
          />
          <img
            src={img("gallery-5.jpg")}
            alt="View down the fairway at a golf course"
            loading="lazy"
          />
          <img
            src={img("gallery-6.jpg")}
            alt="Group selfie after hockey"
            loading="lazy"
          />
        </div>
        <figcaption className="mt-2 text-center font-mono text-xs text-bone-pencil">
          Food, golf, and the people
        </figcaption>
      </figure>

      <SectionHeading>The End</SectionHeading>
      <p>
        The through line this summer was learning to find a need and go at it.
        Prototype it, wire it up, show it. That path almost always got the best
        reception. I got to work directly with our CEO, Kimia, and our CTO,
        Eden, on the things I was building, which is rare for an intern. My
        boss, Jason, gave me room to find where I could be effective. And I was
        surrounded by people my age carrying enormous responsibility and
        pulling it off, which was equal parts motivating and slightly
        terrifying.
      </p>
      <p>
        I'm leaving a better engineer than I arrived, and a real product
        engineer on top of that. The biggest shift was realizing how much of
        the job lived outside the code. If you're an aspiring intern reading
        this, that's the thing I'd pass on: take initiative from day one, ask a
        lot of questions, over-communicate, and don't be so scared of making
        mistakes that you never actually try. Now, back to McGill for my final
        year, with a much better idea of what I want to build next.
      </p>
    </div>
  );
}
